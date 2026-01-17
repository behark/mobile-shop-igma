/**
 * Image Download Script
 * Downloads relevant images from Unsplash for the website
 * 
 * Usage: node scripts/download-images.js
 * 
 * Note: This uses Unsplash Source API (no key required for basic usage)
 * For better quality, you can sign up for Unsplash API at https://unsplash.com/developers
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

// Unsplash image URLs - High quality, relevant images
const imagesToDownload = {
  gallery: [
    {
      filename: 'repair-iphone-screen.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80', // Phone repair
      description: 'iPhone screen repair'
    },
    {
      filename: 'repair-samsung-battery.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80', // Phone with tools
      description: 'Samsung battery replacement'
    },
    {
      filename: 'unlock-phone.jpg',
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', // Phone unlock
      description: 'Phone unlocking service'
    },
    {
      filename: 'repair-camera.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80', // Camera repair
      description: 'Camera repair service'
    },
    {
      filename: 'screen-replacement.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80', // Screen replacement
      description: 'Screen replacement service'
    },
    {
      filename: 'complex-repair.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80', // Complex repair
      description: 'Complex phone repair'
    }
  ],
  products: [
    {
      filename: 'phones.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80', // Phones display
      description: 'Mobile phones for sale'
    },
    {
      filename: 'phone-cases.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80', // Phone cases
      description: 'Phone cases'
    },
    {
      filename: 'accessories.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80', // Accessories
      description: 'Phone accessories'
    },
    {
      filename: 'screen-protectors.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80', // Screen protectors
      description: 'Screen protectors'
    }
  ],
  services: [
    {
      filename: 'repair.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      description: 'Repair service'
    },
    {
      filename: 'unlock.jpg',
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      description: 'Unlock service'
    },
    {
      filename: 'screen-replacement.jpg',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      description: 'Screen replacement'
    },
    {
      filename: 'battery-replacement.jpg',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
      description: 'Battery replacement'
    }
  ]
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          console.log(`✅ Downloaded: ${path.basename(filepath)}`)
          resolve()
        })
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        file.close()
        fs.unlinkSync(filepath)
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject)
      } else {
        file.close()
        fs.unlinkSync(filepath)
        reject(new Error(`Failed to download: ${url} (Status: ${response.statusCode})`))
      }
    }).on('error', (err) => {
      file.close()
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
      }
      reject(err)
    })
  })
}

async function downloadAllImages() {
  console.log('🚀 Starting image download...\n')

  // Create directories
  const dirs = ['public/images/gallery', 'public/images/products', 'public/images/services']
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`📁 Created directory: ${dir}`)
    }
  })

  console.log('\n📥 Downloading images...\n')

  // Download gallery images
  console.log('📸 Gallery Images:')
  for (const img of imagesToDownload.gallery) {
    const filepath = path.join('public/images/gallery', img.filename)
    try {
      await downloadImage(img.url, filepath)
    } catch (error) {
      console.log(`❌ Error downloading ${img.filename}: ${error.message}`)
    }
  }

  // Download product images
  console.log('\n🛍️ Product Images:')
  for (const img of imagesToDownload.products) {
    const filepath = path.join('public/images/products', img.filename)
    try {
      await downloadImage(img.url, filepath)
    } catch (error) {
      console.log(`❌ Error downloading ${img.filename}: ${error.message}`)
    }
  }

  // Download service images
  console.log('\n🔧 Service Images:')
  for (const img of imagesToDownload.services) {
    const filepath = path.join('public/images/services', img.filename)
    try {
      await downloadImage(img.url, filepath)
    } catch (error) {
      console.log(`❌ Error downloading ${img.filename}: ${error.message}`)
    }
  }

  console.log('\n✅ Image download complete!')
  console.log('\n💡 Note: These are placeholder images from Unsplash.')
  console.log('   Replace them with your actual business photos when available.')
}

// Run the download
downloadAllImages().catch(console.error)
