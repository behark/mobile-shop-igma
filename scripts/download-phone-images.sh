#!/bin/bash

# Download 25 phone images from Unsplash
# Using specific phone-related search terms

echo "🚀 Downloading 25 phone images from Unsplash..."
echo ""

# Create directory
mkdir -p public/images/phones

cd public/images/phones

# Apple iPhones
echo "📱 Downloading iPhone images..."
curl -L "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o iphone-15-pro-max.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o iphone-15-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o iphone-15.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1580910051074-3af694984cfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o iphone-14-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o iphone-13.jpg --silent --show-error

# Samsung Galaxy
echo "📱 Downloading Samsung images..."
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o galaxy-s24-ultra.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o galaxy-s24-plus.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o galaxy-s24.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o galaxy-s23-ultra.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o galaxy-a54.jpg --silent --show-error

# Xiaomi
echo "📱 Downloading Xiaomi images..."
curl -L "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o xiaomi-14-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o xiaomi-13.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o redmi-note-13-pro.jpg --silent --show-error

# Google Pixel
echo "📱 Downloading Google Pixel images..."
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o pixel-8-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1580910051074-3af694984cfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o pixel-8.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o pixel-7a.jpg --silent --show-error

# OnePlus
echo "📱 Downloading OnePlus images..."
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o oneplus-12.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o oneplus-11.jpg --silent --show-error

# Huawei
echo "📱 Downloading Huawei images..."
curl -L "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o huawei-p60-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o huawei-nova-12.jpg --silent --show-error

# Oppo
echo "📱 Downloading Oppo images..."
curl -L "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o oppo-find-x6-pro.jpg --silent --show-error
curl -L "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o oppo-reno-11.jpg --silent --show-error

# Realme
echo "📱 Downloading Realme images..."
curl -L "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o realme-gt-5-pro.jpg --silent --show-error

# Motorola
echo "📱 Downloading Motorola images..."
curl -L "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o motorola-edge-40-pro.jpg --silent --show-error

# Nothing
echo "📱 Downloading Nothing Phone images..."
curl -L "https://images.unsplash.com/photo-1580910051074-3af694984cfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o nothing-phone-2.jpg --silent --show-error

cd ../../..

echo ""
echo "✅ All 25 phone images downloaded!"
echo ""
echo "📊 Checking file sizes..."
ls -lh public/images/phones/*.jpg 2>/dev/null | awk '{print "  " $9 ": " $5}'
echo ""
echo "💡 Note: Replace these with actual phone photos when available."
