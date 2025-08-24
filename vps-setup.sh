#!/bin/bash

# VPS首次设置脚本 - 只需运行一次
echo "🚀 VPS初始化设置..."

# 创建项目目录
sudo mkdir -p /var/www/cursorhistory/{en,cn,es,ge,ja}

# 设置权限
sudo chown -R $USER:$USER /var/www/cursorhistory

# 创建PM2 ecosystem配置
cat > /var/www/cursorhistory/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'cursorhistory-en',
      cwd: '/var/www/cursorhistory/en',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: 'cursorhistory-cn',
      cwd: '/var/www/cursorhistory/cn',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: 'cursorhistory-es',
      cwd: '/var/www/cursorhistory/es',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: 'cursorhistory-ge',
      cwd: '/var/www/cursorhistory/ge',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3004
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: 'cursorhistory-ja',
      cwd: '/var/www/cursorhistory/ja',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
EOF

# 创建Nginx配置
sudo tee /etc/nginx/sites-available/cursorhistory > /dev/null << 'EOF'
# Main domain - English
server {
    listen 80;
    server_name cursorhistory.com www.cursorhistory.com;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Chinese site
server {
    listen 80;
    server_name cn.cursorhistory.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Spanish site
server {
    listen 80;
    server_name es.cursorhistory.com;
    
    location / {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# German site
server {
    listen 80;
    server_name ge.cursorhistory.com;
    
    location / {
        proxy_pass http://localhost:3004;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Japanese site
server {
    listen 80;
    server_name ja.cursorhistory.com;
    
    location / {
        proxy_pass http://localhost:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# 启用站点
sudo ln -sf /etc/nginx/sites-available/cursorhistory /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 测试并重启Nginx
sudo nginx -t && sudo systemctl reload nginx

# 设置PM2开机启动
pm2 startup systemd -u $USER --hp /home/$USER
pm2 save

echo "✅ VPS设置完成！"
echo "现在GitHub Actions可以自动部署到这台服务器了"