#!/bin/bash

# Final Image Download Script
# Uses specific Unsplash photo IDs for reliable downloads

echo "🚀 Downloading high-quality images from Unsplash..."
echo ""

# Gallery Images - Using specific Unsplash photo IDs
echo "📸 Downloading Gallery Images..."

cd public/images/gallery

# Phone repair/workshop images
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=85&auto=format&fit=crop" -o repair-iphone-screen.jpg --silent --show-error
echo "  ✅ repair-iphone-screen.jpg"

curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=85&auto=format&fit=crop" -o repair-samsung-battery.jpg --silent --show-error
echo "  ✅ repair-samsung-battery.jpg"

curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85&auto=format&fit=crop" -o unlock-phone.jpg --silent --show-error
echo "  ✅ unlock-phone.jpg"

curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&q=85&auto=format&fit=crop" -o repair-camera.jpg --silent --show-error
echo "  ✅ repair-camera.jpg"

curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=85&auto=format&fit=crop" -o screen-replacement.jpg --silent --show-error
echo "  ✅ screen-replacement.jpg"

curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=85&auto=format&fit=crop" -o complex-repair.jpg --silent --show-error
echo "  ✅ complex-repair.jpg"

cd ../../products

# Product Images
echo ""
echo "🛍️ Downloading Product Images..."

curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=85&auto=format&fit=crop" -o phones.jpg --silent --show-error
echo "  ✅ phones.jpg"

curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=85&auto=format&fit=crop" -o phone-cases.jpg --silent --show-error
echo "  ✅ phone-cases.jpg"

curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=85&auto=format&fit=crop" -o accessories.jpg --silent --show-error
echo "  ✅ accessories.jpg"

curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=85&auto=format&fit=crop" -o screen-protectors.jpg --silent --show-error
echo "  ✅ screen-protectors.jpg"

cd ../../..

echo ""
echo "✅ All images downloaded successfully!"
echo ""
echo "📁 Images saved to:"
echo "   - public/images/gallery/ (6 images)"
echo "   - public/images/products/ (4 images)"
echo ""
echo "💡 These are high-quality placeholder images from Unsplash."
echo "   Replace them with your actual business photos when available."
