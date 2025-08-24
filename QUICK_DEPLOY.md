# 🚀 快速部署指南 - CursorHistory 多语言站点

## 准备工作

1. **DNS配置** - 在域名提供商处添加以下A记录：
   ```
   cursorhistory.com     → 你的VPS IP
   www.cursorhistory.com → 你的VPS IP
   cn.cursorhistory.com  → 你的VPS IP
   es.cursorhistory.com  → 你的VPS IP
   ge.cursorhistory.com  → 你的VPS IP
   ja.cursorhistory.com  → 你的VPS IP
   ```

2. **上传文件到VPS**
   ```bash
   # 在本地打包（排除node_modules）
   tar -czf cursorhistory.tar.gz --exclude='*/node_modules' --exclude='*/.next' en/ cn/ es/ ge/ ja/ nginx-simple.conf ecosystem.config.js deploy.sh
   
   # 上传到VPS
   scp cursorhistory.tar.gz root@你的VPS_IP:~/
   ```

## 一键部署

SSH登录到VPS后执行：

```bash
# 1. 解压文件
cd ~
tar -xzf cursorhistory.tar.gz
mv en cn es ge ja nginx-simple.conf ecosystem.config.js deploy.sh ~/cursorhistory/

# 2. 执行部署脚本
cd ~/cursorhistory
chmod +x deploy.sh
./deploy.sh
```

## 手动部署步骤（如果自动脚本失败）

```bash
# 1. 安装软件
sudo apt update
sudo apt install -y nginx nodejs npm
sudo npm install -g pm2

# 2. 创建项目目录
sudo mkdir -p /var/www/cursorhistory
sudo cp -r ~/cursorhistory/* /var/www/cursorhistory/
cd /var/www/cursorhistory

# 3. 构建每个语言版本
cd /var/www/cursorhistory/en && npm install && npm run build
cd /var/www/cursorhistory/cn && npm install && npm run build
cd /var/www/cursorhistory/es && npm install && npm run build
cd /var/www/cursorhistory/ge && npm install && npm run build
cd /var/www/cursorhistory/ja && npm install && npm run build

# 4. 配置Nginx
sudo cp /var/www/cursorhistory/nginx-simple.conf /etc/nginx/sites-available/cursorhistory
sudo ln -sf /etc/nginx/sites-available/cursorhistory /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# 5. 启动所有应用
cd /var/www/cursorhistory
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 验证部署

```bash
# 检查PM2状态
pm2 status

# 检查Nginx状态
sudo systemctl status nginx

# 查看日志
pm2 logs

# 测试访问
curl http://localhost:3000  # 英文站
curl http://localhost:3001  # 中文站
```

## 常用运维命令

```bash
# 重启某个站点
pm2 restart cursorhistory-cn

# 重启所有站点
pm2 restart all

# 查看日志
pm2 logs cursorhistory-en

# 更新代码后重新部署
cd /var/www/cursorhistory/en
git pull
npm install
npm run build
pm2 restart cursorhistory-en
```

## 添加HTTPS（可选）

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取证书（一次性为所有域名）
sudo certbot --nginx -d cursorhistory.com -d www.cursorhistory.com -d cn.cursorhistory.com -d es.cursorhistory.com -d ge.cursorhistory.com -d ja.cursorhistory.com

# 自动续期
sudo certbot renew --dry-run
```

## 故障排查

1. **端口被占用**
   ```bash
   sudo lsof -i :3000
   kill -9 <PID>
   ```

2. **PM2应用未启动**
   ```bash
   pm2 delete all
   pm2 start ecosystem.config.js
   ```

3. **Nginx配置错误**
   ```bash
   sudo nginx -t
   sudo tail -f /var/log/nginx/error.log
   ```

## 监控

```bash
# PM2监控面板
pm2 monit

# 查看资源使用
pm2 list
pm2 info cursorhistory-en
```

---

💡 **提示**: 这是最简单的部署方案，适合快速上线。后续可以根据需要添加CDN、负载均衡、数据库等功能。