# 📸 How to Add More Phone Images

## 🎯 Overview

The phone details modal supports **multiple images per phone**. When customers click a phone card, they can browse through all available images.

---

## 📝 How It Works

### Current Setup:
- Each phone has **1 main image** (displayed in grid)
- Modal shows **main image + additional images** (if added)
- Image gallery with navigation arrows
- Thumbnail navigation below main image

---

## ➕ How to Add More Images

### Step 1: Add Images to Folder
Place additional phone images in:
```
public/images/phones/
```

**Naming convention:**
- Main image: `iphone-15-pro-max.jpg`
- Additional images: `iphone-15-pro-max-1.jpg`, `iphone-15-pro-max-2.jpg`, etc.

### Step 2: Update Phone Data

Edit `/lib/phones-data.js` and add `imageGallery` array:

```javascript
{
  id: 1,
  brand: 'Apple',
  model: 'iPhone 15 Pro Max',
  image: '/images/phones/iphone-15-pro-max.jpg', // Main image (for grid)
  imageGallery: [ // Additional images (for modal)
    '/images/phones/iphone-15-pro-max-1.jpg',
    '/images/phones/iphone-15-pro-max-2.jpg',
    '/images/phones/iphone-15-pro-max-3.jpg',
  ],
  // ... rest of phone data
}
```

### Step 3: Done! ✅

The modal will automatically:
- Show all images in gallery
- Add navigation arrows
- Show thumbnails below
- Display image counter (1/4, 2/4, etc.)

---

## 🎨 Image Recommendations

### What Images to Add:
1. **Front view** (main image)
2. **Back view**
3. **Side view**
4. **Close-up of camera**
5. **Screen display**
6. **Different colors** (if available)

### Image Specifications:
- **Format:** JPG or WebP
- **Size:** 800x800px (square) or 1200x800px (landscape)
- **File size:** < 500KB per image
- **Quality:** High quality, well-lit

---

## 📱 User Experience

### In Grid View:
- Shows **main image** only
- Click card to see details

### In Modal View:
- Shows **all images** (main + gallery)
- **Navigation arrows** to browse
- **Thumbnail gallery** below
- **Image counter** (1/4, 2/4, etc.)
- **Keyboard navigation** (arrow keys)

---

## 💡 Example

### Before (1 image):
```javascript
{
  image: '/images/phones/iphone-15-pro-max.jpg',
  // Only shows 1 image in modal
}
```

### After (4 images):
```javascript
{
  image: '/images/phones/iphone-15-pro-max.jpg',
  imageGallery: [
    '/images/phones/iphone-15-pro-max-1.jpg', // Back view
    '/images/phones/iphone-15-pro-max-2.jpg', // Side view
    '/images/phones/iphone-15-pro-max-3.jpg', // Camera close-up
  ],
  // Shows 4 images total in modal (main + 3 gallery)
}
```

---

## ✅ Benefits

1. **Better Customer Experience**
   - See phone from all angles
   - More confidence in purchase
   - Better product understanding

2. **Professional Look**
   - Multiple images = more professional
   - Shows attention to detail
   - Builds trust

3. **Easy to Update**
   - Just add `imageGallery` array
   - No code changes needed
   - Modal handles everything automatically

---

## 🎯 Quick Start

1. **Take/Download Images:**
   - Front, back, side views
   - Save to `public/images/phones/`

2. **Update Data:**
   - Open `/lib/phones-data.js`
   - Add `imageGallery: [...]` to phone object

3. **Test:**
   - Click phone card
   - See all images in modal!

---

## 📝 Notes

- **Main image** (`image`) is used in grid view
- **Gallery images** (`imageGallery`) are shown in modal
- **No limit** on number of images
- **Modal handles** all navigation automatically
- **Mobile responsive** - works on all devices

---

**That's it! Super easy to add more images!** 🎉
