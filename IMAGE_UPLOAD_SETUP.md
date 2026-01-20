# 📸 Image Upload Setup Guide

## ✅ What's Been Added

The admin dashboard now supports **image uploads** for products! You can:
- Upload actual images (JPG, PNG, etc.) up to 5MB
- Or use emoji/icons as before (fallback option)
- Images are displayed in the store and admin dashboard

## 🚀 Setup Options

### Option 1: Vercel Blob (Recommended - Free)

For best performance and storage, use Vercel Blob:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Storage"** tab
   - Click **"Create Database"**
   - Select **"Blob"** (Object Storage)
   - Name it (e.g., `igma-blob`)
   - Click **"Create"**

2. **Vercel automatically adds:**
   - `BLOB_READ_WRITE_TOKEN` environment variable

3. **That's it!** Images will be stored in Vercel Blob.

### Option 2: Works Without Setup (Fallback)

If you don't set up Vercel Blob, images will be stored as base64 data URLs. This works but:
- ⚠️ Images are stored in the database (larger database size)
- ⚠️ Slower loading for large images
- ✅ Works immediately without any setup

## 📋 How to Use

1. **Go to Admin Dashboard:** `/admin`
2. **Click "Shto Aksesori"** (Add Accessory)
3. **Upload Image:**
   - Click the file input
   - Select an image (JPG, PNG, etc.)
   - Max size: 5MB
   - Image will upload automatically
4. **Or Use Emoji:**
   - Leave file input empty
   - Type an emoji in "Ikona/Emoji" field (e.g., 📱)
5. **Fill other fields and save**

## 🎨 Image Display

- **Admin Dashboard:** Shows image preview in the table
- **Store Section:** Displays product images
- **Shopping Cart:** Shows product images

## 💡 Tips

- **Recommended image size:** 500x500px to 1000x1000px
- **File formats:** JPG, PNG, WebP work best
- **File size:** Keep under 1MB for best performance (max 5MB)
- **Aspect ratio:** Square images (1:1) look best

## 🔧 Troubleshooting

**Image not uploading?**
- Check file size (must be under 5MB)
- Check file type (must be an image)
- Check Vercel function logs for errors

**Image not displaying?**
- Check browser console for errors
- Verify image URL is correct in admin dashboard
- Try uploading again

**Want to use Vercel Blob?**
- Follow Option 1 above
- Redeploy your site
- Images will automatically use Blob storage

## ✨ That's It!

Your admin dashboard now supports image uploads! Upload product images to make your store look professional.
