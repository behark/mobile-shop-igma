#!/bin/bash

# Reliable Image Download Script
# Uses specific Unsplash photo IDs for consistent, high-quality images

echo "🚀 Downloading high-quality images from Unsplash..."
echo ""

# Gallery Images - Phone repair related (using specific Unsplash photo IDs)
echo "📸 Downloading Gallery Images..."

cd public/images/gallery

# iPhone repair - Phone with tools
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" \
  -o repair-iphone-screen.jpg --silent --show-error
echo "  ✅ repair-iphone-screen.jpg"

# Battery repair - Smartphone
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \
  -o repair-samsung-battery.jpg --silent --show-error
echo "  ✅ repair-samsung-battery.jpg"

# Phone unlock - Mobile phone
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \
  -o unlock-phone.jpg --silent --show-error
echo "  ✅ unlock-phone.jpg"

# Camera repair - Phone camera
curl -L "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \
  -o repair-camera.jpg --silent --show-error
echo "  ✅ repair-camera.jpg"

# Screen replacement - Phone display
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \
  -o screen-replacement.jpg --silent --show-error
echo "  ✅ screen-replacement.jpg"

# Complex repair - Workshop/repair
curl -L "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \
  -o complex-repair.jpg --silent --show-error
echo "  ✅ complex-repair.jpg"

cd ../../..

# Product Images
echo ""
echo "🛍️ Downloading Product Images..."

cd public/images/products

# Phones display
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o phones.jpg --silent --show-error
echo "  ✅ phones.jpg"

# Phone cases
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o phone-cases.jpg --silent --show-error
echo "  ✅ phone-cases.jpg"

# Accessories
curl -L "https://images.unsplash.com/photo-1580910051074-3af694984cfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o accessories.jpg --silent --show-error
echo "  ✅ accessories.jpg"

# Screen protectors
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o screen-protectors.jpg --silent --show-error
echo "  ✅ screen-protectors.jpg"

cd ../../..

# Service Images
echo ""
echo "🔧 Downloading Service Images..."

cd public/images/services

# Repair service
curl -L "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o repair.jpg --silent --show-error
echo "  ✅ repair.jpg"

# Unlock service
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o unlock.jpg --silent --show-error
echo "  ✅ unlock.jpg"

# Screen replacement
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o screen-replacement.jpg --silent --show-error
echo "  ✅ screen-replacement.jpg"

# Battery replacement
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" \
  -o battery-replacement.jpg --silent --show-error
echo "  ✅ battery-replacement.jpg"

cd ../../..

echo ""
echo "✅ All images downloaded successfully!"
echo ""
echo "📊 Checking file sizes..."
ls -lh public/images/gallery/*.jpg 2>/dev/null | awk '{print "  " $9 ": " $5}'
ls -lh public/images/products/*.jpg 2>/dev/null | awk '{print "  " $9 ": " $5}'
ls -lh public/images/services/*.jpg 2>/dev/null | awk '{print "  " $9 ": " $5}'
echo ""
echo "💡 Note: Replace these with your actual business photos when available."
