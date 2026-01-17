#!/bin/bash

# Simple Image Download Script
# Downloads phone repair related images from Unsplash

echo "🚀 Downloading images from Unsplash..."
echo ""

# Gallery Images
echo "📸 Downloading Gallery Images (6 images)..."
cd public/images/gallery

# Using Unsplash Source API with specific search terms
curl -L "https://source.unsplash.com/1200x800/?phone,repair" -o repair-iphone-screen.jpg --max-time 30
echo "  ✅ repair-iphone-screen.jpg"

curl -L "https://source.unsplash.com/1200x800/?smartphone,battery" -o repair-samsung-battery.jpg --max-time 30
echo "  ✅ repair-samsung-battery.jpg"

curl -L "https://source.unsplash.com/1200x800/?mobile,phone" -o unlock-phone.jpg --max-time 30
echo "  ✅ unlock-phone.jpg"

curl -L "https://source.unsplash.com/1200x800/?phone,camera" -o repair-camera.jpg --max-time 30
echo "  ✅ repair-camera.jpg"

curl -L "https://source.unsplash.com/1200x800/?phone,screen" -o screen-replacement.jpg --max-time 30
echo "  ✅ screen-replacement.jpg"

curl -L "https://source.unsplash.com/1200x800/?phone,workshop" -o complex-repair.jpg --max-time 30
echo "  ✅ complex-repair.jpg"

cd ../../..

# Product Images
echo ""
echo "🛍️ Downloading Product Images (4 images)..."
cd public/images/products

curl -L "https://source.unsplash.com/800x800/?smartphone" -o phones.jpg --max-time 30
echo "  ✅ phones.jpg"

curl -L "https://source.unsplash.com/800x800/?phone,case" -o phone-cases.jpg --max-time 30
echo "  ✅ phone-cases.jpg"

curl -L "https://source.unsplash.com/800x800/?phone,accessories" -o accessories.jpg --max-time 30
echo "  ✅ accessories.jpg"

curl -L "https://source.unsplash.com/800x800/?screen,protector" -o screen-protectors.jpg --max-time 30
echo "  ✅ screen-protectors.jpg"

cd ../../..

echo ""
echo "✅ All images downloaded!"
echo ""
echo "💡 Note: These are placeholder images. Replace with actual business photos when available."
