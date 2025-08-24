#!/bin/bash

# 快速部署脚本
echo "🚀 开始部署 CursorHistory 多语言站点..."

# 创建项目目录
PROJECT_DIR="/var/www/cursorhistory"
sudo mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# 复制项目文件
echo "📁 复制项目文件..."
# 这里假设文件已经上传到服务器的 ~/cursorhistory 目录
cp -r ~/cursorhistory/* $PROJECT_DIR/

# 构建各个语言版本
echo "🔨 构建项目..."
LANGS=("en" "cn" "es" "ge" "ja")
PORTS=(3001 3002 3003 3004 3005)

for i in ${!LANGS[@]}; do
    LANG=${LANGS[$i]}
    PORT=${PORTS[$i]}
    
    echo "构建 $LANG 版本..."
    if [ -d "$PROJECT_DIR/$LANG" ]; then
        cd $PROJECT_DIR/$LANG
        npm install
        npm run build
        
        # 设置环境变量
        echo "PORT=$PORT" > .env.production.local
    fi
done

# 配置 Nginx
echo "🔧 配置 Nginx..."
sudo cp $PROJECT_DIR/nginx-simple.conf /etc/nginx/sites-available/cursorhistory
sudo ln -sf /etc/nginx/sites-available/cursorhistory /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx

# 启动所有应用
echo "▶️ 启动应用..."
cd $PROJECT_DIR
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u $USER --hp /home/$USER

echo "✅ 部署完成！"
echo ""
echo "📌 站点地址："
echo "   主站: http://cursorhistory.com"
echo "   中文: http://cn.cursorhistory.com"
echo "   西班牙语: http://es.cursorhistory.com"
echo "   德语: http://ge.cursorhistory.com"
echo "   日语: http://ja.cursorhistory.com"
echo ""
echo "💡 常用命令："
echo "   查看状态: pm2 status"
echo "   查看日志: pm2 logs"
echo "   重启所有: pm2 restart all"
echo "   重启nginx: sudo systemctl restart nginx"