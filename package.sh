#!/bin/bash

# 打包脚本 - 在本地运行
echo "📦 开始打包..."

# 创建临时目录
mkdir -p upload_package

# 复制配置文件
cp nginx-simple.conf ecosystem.config.js deploy.sh upload_package/

# 复制各语言目录（排除不需要的文件）
for lang in en cn es ge ja; do
    echo "打包 $lang..."
    if [ -d "$lang" ]; then
        # 排除node_modules和.next目录，大大减小包体积
        tar -czf upload_package/${lang}.tar.gz \
            --exclude='node_modules' \
            --exclude='.next' \
            --exclude='.git' \
            --exclude='*.log' \
            $lang/
    fi
done

# 创建最终上传包
tar -czf cursorhistory_deploy.tar.gz upload_package/

echo "✅ 打包完成！"
echo "📦 文件: cursorhistory_deploy.tar.gz"
echo "📊 大小: $(du -h cursorhistory_deploy.tar.gz | cut -f1)"
echo ""
echo "📤 上传命令："
echo "scp cursorhistory_deploy.tar.gz root@你的VPS_IP:~/"