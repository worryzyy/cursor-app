# GitHub Actions 自动部署到 VPS 设置指南

## 第一步：VPS 初始设置

1. SSH登录到VPS，运行初始化脚本：
```bash
# 上传并运行设置脚本
scp vps-setup.sh root@你的VPS_IP:~/
ssh root@你的VPS_IP
chmod +x vps-setup.sh
./vps-setup.sh
```

## 第二步：生成部署用的SSH密钥

在VPS上执行：
```bash
# 生成专门用于部署的SSH密钥（不要设置密码）
ssh-keygen -t ed25519 -f ~/.ssh/deploy_key -N ""

# 添加公钥到authorized_keys
cat ~/.ssh/deploy_key.pub >> ~/.ssh/authorized_keys

# 查看私钥（需要复制到GitHub Secrets）
cat ~/.ssh/deploy_key
```

## 第三步：配置 GitHub Secrets

在你的GitHub仓库中，进入 Settings > Secrets and variables > Actions，添加以下secrets：

| Secret Name | Value | 说明 |
|------------|-------|------|
| `VPS_HOST` | 你的VPS IP地址 | 例如: 192.168.1.100 |
| `VPS_USER` | root 或你的用户名 | 通常是 root |
| `VPS_PORT` | 22 | SSH端口，默认22 |
| `VPS_SSH_KEY` | 上一步生成的私钥内容 | 完整复制 deploy_key 的内容 |

### 添加Secrets步骤：
1. 点击 "New repository secret"
2. 输入 Name（如 VPS_HOST）
3. 输入 Value（如你的VPS IP）
4. 点击 "Add secret"

## 第四步：测试自动部署

1. 修改任何一个语言版本的代码
2. 提交并推送到 main 分支：
```bash
git add .
git commit -m "Test auto deployment"
git push origin main
```

3. 查看部署状态：
   - 进入 GitHub 仓库的 Actions 标签页
   - 查看 "Deploy to VPS" workflow 的运行状态

## 第五步：监控和调试

### 在VPS上查看部署状态：
```bash
# 查看PM2进程状态
pm2 status

# 查看应用日志
pm2 logs

# 查看特定语言版本的日志
pm2 logs cursorhistory-en
pm2 logs cursorhistory-cn

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log
```

### 手动触发部署：
1. 进入 GitHub Actions 页面
2. 选择 "Deploy to VPS" workflow
3. 点击 "Run workflow" 按钮
4. 选择 main 分支
5. 点击 "Run workflow"

## 故障排查

### 1. SSH连接失败
- 检查 VPS_HOST 是否正确
- 检查 VPS_PORT 是否正确（默认22）
- 确认SSH密钥格式正确（包含 -----BEGIN 和 -----END 行）

### 2. 部署后网站无法访问
```bash
# 检查PM2进程
pm2 status
pm2 restart all

# 检查端口监听
sudo netstat -tlnp | grep :300

# 检查Nginx
sudo nginx -t
sudo systemctl status nginx
```

### 3. 构建失败
- 检查 package.json 中的 build 脚本
- 确认 Node.js 版本兼容性

## 优化建议

### 1. 添加部署通知
可以在workflow最后添加通知步骤，发送到Slack/Discord/邮件等

### 2. 添加健康检查
```yaml
- name: Health Check
  run: |
    sleep 10
    curl -f http://${{ secrets.VPS_HOST }}:3001 || exit 1
```

### 3. 分环境部署
可以创建多个workflow文件：
- `deploy-staging.yml` - 部署到测试环境
- `deploy-production.yml` - 部署到生产环境

## 常用命令速查

```bash
# VPS上的常用命令
pm2 status              # 查看所有应用状态
pm2 restart all         # 重启所有应用
pm2 logs               # 查看所有日志
pm2 monit              # 实时监控
pm2 save               # 保存当前进程列表
pm2 resurrect          # 恢复保存的进程列表

# 单个应用操作
pm2 restart cursorhistory-en
pm2 stop cursorhistory-cn
pm2 start cursorhistory-es
pm2 delete cursorhistory-ge
pm2 logs cursorhistory-ja

# Nginx操作
sudo nginx -t          # 测试配置
sudo systemctl reload nginx
sudo systemctl restart nginx
```

---

✅ **设置完成后，每次推送代码到main分支，GitHub Actions会自动：**
1. 构建所有语言版本
2. 打包并上传到VPS
3. 解压并部署
4. 重启PM2进程
5. 完成部署！