# Azure Static Web Apps Deployment Guide

This guide will help you deploy your Dean Hall website to Azure Static Web Apps.

## Prerequisites

- Azure account (sign up at https://azure.microsoft.com/free/)
- GitHub account (your code will be hosted on GitHub)
- GitHub CLI is already configured in this environment

## Step 1: Create a GitHub Repository

I'll help you create a GitHub repository for your website.

```bash
# Navigate to your project
cd /home/ubuntu/deanthall-website

# Initialize git if not already done
git init

# Create a GitHub repository
gh repo create deanthall-website --public --source=. --remote=origin

# Add all files and commit
git add .
git commit -m "Initial commit: Dean Hall website"

# Push to GitHub
git push -u origin main
```

## Step 2: Create Azure Static Web App

1. Go to the Azure Portal: https://portal.azure.com
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"

### Configuration:

**Basics Tab:**
- **Subscription**: Select your Azure subscription
- **Resource Group**: Create new or select existing (e.g., "deanthall-rg")
- **Name**: `deanthall-website` (this will be part of your URL)
- **Plan type**: Free (for personal projects)
- **Region**: Choose closest to your audience (e.g., East US 2, West Europe)

**Deployment Tab:**
- **Source**: GitHub
- **Sign in** to your GitHub account
- **Organization**: Your GitHub username
- **Repository**: `deanthall-website`
- **Branch**: `main`

**Build Details:**
- **Build Presets**: Custom
- **App location**: `/`
- **Api location**: (leave empty)
- **Output location**: `dist`

5. Click "Review + Create"
6. Click "Create"

## Step 3: Configure GitHub Secret

Azure will automatically add the deployment token to your GitHub repository as a secret called `AZURE_STATIC_WEB_APPS_API_TOKEN`. This happens automatically when you connect Azure to GitHub.

## Step 4: Deployment

Once created, Azure will:
1. Automatically trigger a GitHub Actions workflow
2. Build your website
3. Deploy it to Azure

You can monitor the deployment:
- In Azure Portal: Go to your Static Web App resource → "GitHub Action runs"
- In GitHub: Go to your repository → "Actions" tab

## Step 5: Custom Domain (deanthall.com)

After deployment, you can add your custom domain:

1. In Azure Portal, go to your Static Web App
2. Click "Custom domains" in the left menu
3. Click "+ Add"
4. Choose "Custom domain on other DNS"
5. Enter: `deanthall.com`
6. Azure will provide DNS records to add to your domain registrar

**DNS Configuration at your domain registrar:**
- Add a CNAME record: `www` → `[your-static-web-app-url].azurestaticapps.net`
- Add a TXT record for verification (Azure will provide this)
- For apex domain (deanthall.com), add an ALIAS or ANAME record pointing to the Azure URL

## Your Website URLs

After deployment, your site will be available at:
- **Azure URL**: `https://deanthall-website.azurestaticapps.net` (or similar)
- **Custom Domain**: `https://deanthall.com` (after DNS configuration)

## Updating Your Website

To update your website in the future:
1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Azure will automatically rebuild and redeploy

## Costs

Azure Static Web Apps Free tier includes:
- 100 GB bandwidth per month
- Custom domains
- Free SSL certificates
- Global distribution

This is more than sufficient for a personal website.

## Support

If you encounter any issues:
- Check GitHub Actions logs in your repository
- Check Azure deployment logs in the Azure Portal
- Azure documentation: https://docs.microsoft.com/azure/static-web-apps/

## Project Structure

Your website is built with:
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Output**: `dist/` directory (static files)

