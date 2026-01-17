/**
 * Direct Image Download Script
 * Downloads high-quality images directly from Unsplash
 * No API key required - uses Unsplash Source
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

// Better Unsplash image URLs - more specific to phone repair
const images = {
  gallery: [
    {
      name: 'repair-iphone-screen.jpg',
      // Phone repair workspace
      url: 'https://source.unsplash.com/1200x800/?phone,repair,workshop'
    },
    {
      name: 'repair-samsung-battery.jpg',
      // Phone with tools
      url: 'https://source.unsplash.com/1200x800/?smartphone,repair,tools'
    },
    {
      name: 'unlock-phone.jpg',
      // Phone unlocking
      url: 'https://source.unsplash.com/1200x800/?mobile,phone,unlock'
    },
    {
      name: 'repair-camera.jpg',
      // Camera repair
      url: 'https://source.unsplash.com/1200x800/?phone,camera,repair'
    },
    {
      name: 'screen-replacement.jpg',
      // Screen replacement
      url: 'https://source.unsplash.com/1200x800/?phone,screen,display'
    },
    {
      name: 'complex-repair.jpg',
      // Complex repair
      url: 'https://source.unsplash.com/1200x800/?phone,repair,workshop'
    }
  ],
  products: [
    {
      name: 'phones.jpg',
      url: 'https://source.unsplash.com/800x800/?smartphone,mobile,phone'
    },
    {
      name: 'phone-cases.jpg',
      url: 'https://source.unsplash.com/800x800/?phone,case,cover'
    },
    {
      name: 'accessories.jpg',
      url: 'https://source.unsplash.com/800x800/?phone,accessories,charger'
    },
    {
      name: 'screen-protectors.jpg',
      url: 'https://source.unsplash.com/800x800/?screen,protector,glass'
    }
  ]
}

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      } else {
        file.close()
        fs.unlinkSync(filepath)
        reject(new Error(`Status: ${res.statusCode}`))
      }
    }).on('error', (err) => {
      file.close()
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath)
      reject(err)
    })
  })
}

async function main() {
  console.log('🚀 Downloading images from Unsplash...\n')
  
  // Create dirs
  ['public/images/gallery', 'public/images/products'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  })

  // Download gallery
  console.log('📸 Gallery images:')
  for (const img of images.gallery) {
    const filepath = path.join('public/images/gallery', img.name)
    try {
      await download(img.url, filepath)
      console.log(`  ✅ ${img.name}`)
    } catch (e) {
      console.log(`  ❌ ${img.name} - ${e.message}`)
    }
  }

  // Download products
  console.log('\n🛍️ Product images:')
  for (const img of images.products) {
    const filepath = path.join('public/images/products', img.name)
    try {
      await download(img.url, filepath)
      console.log(`  ✅ ${img.name}`)
    } catch (e) {
      console.log(`  ❌ ${img.name} - ${e.message}`)
    }
  }

  console.log('\n✅ Done!')
}

main().catch(console.error)
