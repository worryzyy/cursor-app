# Deployment Guide for cursorhistory.com

## Prerequisites
- VPS server with Ubuntu/Debian
- Domain (cursorhistory.com) pointed to your VPS IP address
- SSH access to your VPS
- Docker and Docker Compose installed

## Step 1: Install Docker and Docker Compose on VPS

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group
sudo usermod -aG docker $USER
```

## Step 2: Install Certbot for SSL Certificates

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Stop nginx if running
sudo systemctl stop nginx

# Get SSL certificate
sudo certbot certonly --standalone -d cursorhistory.com -d www.cursorhistory.com
```

## Step 3: Upload Project to VPS

```bash
# On your local machine, create a tar archive
tar -czf cursorhistory.tar.gz nginx.conf docker-compose.yml en/

# Upload to VPS (replace YOUR_VPS_IP with actual IP)
scp cursorhistory.tar.gz username@YOUR_VPS_IP:/home/username/

# Or use rsync for better efficiency
rsync -avz --exclude 'node_modules' --exclude '.git' ./ username@YOUR_VPS_IP:/home/username/cursorhistory/
```

## Step 4: Setup on VPS

```bash
# SSH into your VPS
ssh username@YOUR_VPS_IP

# Create project directory
mkdir -p /var/www/cursorhistory
cd /var/www/cursorhistory

# Extract files (if using tar)
tar -xzf ~/cursorhistory.tar.gz

# Or move files (if using rsync)
mv ~/cursorhistory/* ./

# Navigate to the en directory
cd en

# Install dependencies and build
npm install
npm run build
```

## Step 5: Deploy with Docker Compose

```bash
# Go back to project root
cd /var/www/cursorhistory

# Start services
docker-compose up -d

# Check if services are running
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 6: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## Step 7: Setup Auto-renewal for SSL Certificate

```bash
# Test renewal
sudo certbot renew --dry-run

# Add cron job for auto-renewal
sudo crontab -e
# Add this line:
0 3 * * * /usr/bin/certbot renew --quiet && docker-compose -f /var/www/cursorhistory/docker-compose.yml restart nginx
```

## Alternative: Direct Deployment without Docker

If you prefer not to use Docker:

### 1. Install Node.js and PM2

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

### 2. Install and Configure Nginx

```bash
# Install Nginx
sudo apt install nginx -y

# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/cursorhistory.com
sudo ln -s /etc/nginx/sites-available/cursorhistory.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 3. Run Next.js with PM2

```bash
cd /var/www/cursorhistory/en
npm install
npm run build

# Start with PM2
pm2 start npm --name "cursorhistory" -- start
pm2 save
pm2 startup

# Check status
pm2 status
```

## Maintenance Commands

```bash
# View logs
docker-compose logs -f nextjs
docker-compose logs -f nginx

# Restart services
docker-compose restart

# Update application
git pull
docker-compose down
docker-compose build
docker-compose up -d

# Backup
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/cursorhistory
```

## Troubleshooting

1. **Port 3000 not accessible**: Check firewall and Docker network settings
2. **SSL certificate issues**: Ensure domain DNS is properly configured
3. **502 Bad Gateway**: Check if Next.js app is running on port 3000
4. **Permission denied**: Check file permissions and Docker user permissions

## Environment Variables

Create `.env.production` file in the `en` directory:

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://cursorhistory.com
```

## Monitoring

Consider setting up monitoring:
- Uptime monitoring: UptimeRobot, Pingdom
- Server monitoring: Netdata, Prometheus
- Log management: ELK Stack, Papertrail