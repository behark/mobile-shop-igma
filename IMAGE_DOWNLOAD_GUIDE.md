# Image Download Guide - Mobile Shop IGMA

## ✅ Images Successfully Downloaded!

### Gallery Images (6 images)
- ✅ `repair-iphone-screen.jpg` - iPhone repair
- ✅ `repair-samsung-battery.jpg` - Battery replacement
- ✅ `unlock-phone.jpg` - Phone unlocking
- ✅ `repair-camera.jpg` - Camera repair
- ✅ `screen-replacement.jpg` - Screen replacement
- ✅ `complex-repair.jpg` - Complex repair

**Location:** `public/images/gallery/`

### Product Images (4 images)
- ✅ `phones.jpg` - Mobile phones
- ✅ `phone-cases.jpg` - Phone cases
- ✅ `accessories.jpg` - Phone accessories
- ✅ `screen-protectors.jpg` - Screen protectors

**Location:** `public/images/products/`

### Service Images (4 images)
- ✅ `repair.jpg` - Repair service
- ✅ `unlock.jpg` - Unlock service
- ✅ `screen-replacement.jpg` - Screen replacement service
- ✅ `battery-replacement.jpg` - Battery replacement service

**Location:** `public/images/services/`

---

## 🎨 Image Sources

All images are from **Unsplash** - high-quality, free-to-use images.

**Note:** These are placeholder images. For best results, replace them with:
- Actual photos of your repair work
- Photos of your products
- Photos of your shop/workspace
- Customer photos (with permission)

---

## 📝 How to Replace Images

### Option 1: Use Your Own Photos
1. Take photos of your actual work/products
2. Optimize them (recommended: 1200x800px for gallery, 800x800px for products)
3. Save them with the same filenames in the respective directories
4. The website will automatically use them!

### Option 2: Download Different Images
Run the download script again:
```bash
./scripts/download-images-reliable.sh
```

### Option 3: Manual Download
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for: "phone repair", "smartphone", "mobile phone", etc.
3. Download images
4. Rename and place in appropriate directories

---

## 🔍 Verify Images Are Working

1. **Check file sizes:**
   ```bash
   ls -lh public/images/gallery/
   ls -lh public/images/products/
   ```

2. **Test in browser:**
   - Start dev server: `npm run dev`
   - Visit homepage
   - Check gallery section
   - Images should appear (or icons if images failed)

3. **Check console:**
   - Open browser DevTools
   - Check for image loading errors

---

## 📊 Image Requirements

### Gallery Images
- **Format:** JPG or WebP
- **Size:** 1200x800px (recommended)
- **File size:** < 500KB per image
- **Aspect ratio:** 3:2 or 16:9

### Product Images
- **Format:** JPG or WebP
- **Size:** 800x800px (square, recommended)
- **File size:** < 300KB per image
- **Aspect ratio:** 1:1 (square)

### Service Images
- **Format:** JPG or WebP
- **Size:** 800x600px (recommended)
- **File size:** < 300KB per image

---

## 🚀 Next Steps

1. ✅ **Images are downloaded** - Check if they display correctly
2. ✅ **Test the website** - Refresh and see images in gallery
3. ⏳ **Replace with real photos** - When you have actual business photos
4. ✅ **Optimize if needed** - Use tools like TinyPNG or ImageOptim

---

## 💡 Tips

### Best Practices:
- Use high-quality photos
- Keep file sizes reasonable (< 500KB)
- Use consistent aspect ratios
- Add alt text (already configured in code)
- Optimize images before uploading

### Image Optimization Tools:
- **Online:** TinyPNG, Squoosh, ImageOptim
- **Command line:** `imagemagick`, `optipng`
- **Next.js:** Automatically optimizes images!

---

## ✅ Status

**Images Downloaded:** ✅ 14 images total
- Gallery: 6 images
- Products: 4 images  
- Services: 4 images

**Ready to Use:** ✅ Yes! The website will automatically use these images.

**Next:** Test the website and see the images in action! 🎉
