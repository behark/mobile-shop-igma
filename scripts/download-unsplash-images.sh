#!/bin/bash

# Image Download Script for Mobile Shop IGMA
# Downloads relevant images from Unsplash

echo "🚀 Starting image download from Unsplash..."
echo ""

# Create directories
mkdir -p public/images/gallery
mkdir -p public/images/products
mkdir -p public/images/services

echo "📁 Directories created"
echo ""

# Gallery Images - Phone repair related
echo "📸 Downloading Gallery Images..."

# iPhone screen repair
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80" -o public/images/gallery/repair-iphone-screen.jpg

# Samsung battery repair
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80" -o public/images/gallery/repair-samsung-battery.jpg

# Phone unlock
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" -o public/images/gallery/unlock-phone.jpg

# Camera repair
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80" -o public/images/gallery/repair-camera.jpg

# Screen replacement
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80" -o public/images/gallery/screen-replacement.jpg

# Complex repair
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80" -o public/images/gallery/complex-repair.jpg

echo "✅ Gallery images downloaded"
echo ""

# Product Images
echo "🛍️ Downloading Product Images..."

# Phones
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" -o public/images/products/phones.jpg

# Phone cases
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80" -o public/images/products/phone-cases.jpg

# Accessories
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" -o public/images/products/accessories.jpg

# Screen protectors
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80" -o public/images/products/screen-protectors.jpg

echo "✅ Product images downloaded"
echo ""

# Service Images
echo "🔧 Downloading Service Images..."

# Repair
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" -o public/images/services/repair.jpg

# Unlock
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" -o public/images/services/unlock.jpg

# Screen replacement
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" -o public/images/services/screen-replacement.jpg

# Battery replacement
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80" -o public/images/services/battery-replacement.jpg

echo "✅ Service images downloaded"
echo ""
echo "🎉 All images downloaded successfully!"
echo ""
echo "💡 Note: These are placeholder images from Unsplash."
echo "   Replace them with your actual business photos when available."
