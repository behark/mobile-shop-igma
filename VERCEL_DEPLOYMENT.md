# Vercel Deployment Guide

## Database Setup for Products

The admin dashboard needs a database to store products. We're using **Vercel KV** (Redis) which is free and easy to set up.

### Option 1: Vercel KV (Recommended - Free)

1. **Create Vercel KV Database:**
   - Go to your Vercel dashboard
   - Navigate to your project
   - Go to the "Storage" tab
   - Click "Create Database"
   - Select "KV" (Redis)
   - Choose a name (e.g., "igma-kv")
   - Select a region close to you
   - Click "Create"

2. **Get Connection Details:**
   - After creating, Vercel will automatically add these environment variables:
     - `KV_REST_API_URL`
     - `KV_REST_API_TOKEN`
   - These are automatically available in your Vercel project

3. **Deploy:**
   - Push your code to GitHub/GitLab
   - Vercel will automatically detect and deploy
   - The environment variables are already set!

### Option 2: MongoDB Atlas (Alternative - Free)

If you prefer MongoDB:

1. **Create MongoDB Atlas Account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free account
   - Create a free cluster (M0 - Free tier)

2. **Get Connection String:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

3. **Set Environment Variables in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `MONGODB_URI` = your connection string

4. **Install MongoDB:**
   ```bash
   npm install mongodb
   ```

### Option 3: Supabase (Alternative - Free PostgreSQL)

1. **Create Supabase Account:**
   - Go to https://supabase.com
   - Create a free project

2. **Get Connection Details:**
   - Go to Project Settings → API
   - Copy the connection string

3. **Set Environment Variables:**
   - Add `SUPABASE_URL` and `SUPABASE_KEY` to Vercel

## Current Setup

The code is configured to use **Vercel KV** by default. It will:
- Automatically detect if KV is available (via environment variables)
- Fall back to default data if KV is not configured
- Work seamlessly on Vercel once KV is set up

## Admin Password

**Important:** Change the admin password before deploying!

1. **Option 1: Environment Variable (Recommended)**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add: `ADMIN_PASSWORD` = your secure password
   - Update `pages/admin.js` to use: `process.env.ADMIN_PASSWORD || 'admin123'`

2. **Option 2: Hardcode (Less Secure)**
   - Edit `pages/admin.js`
   - Change `ADMIN_PASSWORD` constant to your password

## Deployment Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add admin dashboard with KV storage"
   git push
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Set Up KV:**
   - In Vercel project → Storage → Create KV Database
   - Environment variables are auto-added

4. **Deploy:**
   - Vercel will automatically deploy
   - Your admin dashboard will work!

## Testing After Deployment

1. Visit: `https://your-domain.vercel.app/admin`
2. Login with your admin password
3. Add a product
4. Check: `https://your-domain.vercel.app/#store` to see it!

## Troubleshooting

**Products not saving?**
- Check Vercel KV is created and connected
- Check environment variables in Vercel dashboard
- Check Vercel function logs for errors

**Admin password not working?**
- Make sure environment variable is set correctly
- Check the password in `pages/admin.js`

**Products not showing?**
- Check browser console for errors
- Verify API route is working: `https://your-domain.vercel.app/api/accessories`
