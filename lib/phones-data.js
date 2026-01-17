/**
 * Phones Inventory Data
 * 25 phones with realistic models, prices, and specifications
 */

export const phones = [
  // Apple iPhones
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    image: '/images/phones/iphone-15-pro-max.jpg',
    // To add more images, uncomment and add image paths:
    // imageGallery: [
    //   '/images/phones/iphone-15-pro-max-1.jpg',
    //   '/images/phones/iphone-15-pro-max-2.jpg',
    //   '/images/phones/iphone-15-pro-max-3.jpg',
    // ],
    price: 1299,
    originalPrice: null,
    storage: '256GB',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" Super Retina XDR',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: 'Up to 29h video playback',
      processor: 'A17 Pro'
    },
    description: 'Telefoni më i fuqishëm i Apple me ekran OLED dhe kamera profesionale.'
  },
  {
    id: 2,
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    image: '/images/phones/iphone-15-pro.jpg',
    price: 1099,
    originalPrice: null,
    storage: '128GB',
    colors: ['Natural Titanium', 'Blue Titanium'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.1" Super Retina XDR',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: 'Up to 23h video playback',
      processor: 'A17 Pro'
    },
    description: 'Performancë e lartë në një madhësi kompakte.'
  },
  {
    id: 3,
    brand: 'Apple',
    model: 'iPhone 15',
    image: '/images/phones/iphone-15.jpg',
    price: 899,
    originalPrice: null,
    storage: '128GB',
    colors: ['Pink', 'Blue', 'Green', 'Yellow', 'Black'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.1" Super Retina XDR',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: 'Up to 20h video playback',
      processor: 'A16 Bionic'
    },
    description: 'iPhone i ri me dizajn modern dhe kamera të përmirësuara.'
  },
  {
    id: 4,
    brand: 'Apple',
    model: 'iPhone 14 Pro',
    image: '/images/phones/iphone-14-pro.jpg',
    price: 999,
    originalPrice: 1099,
    storage: '256GB',
    colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    condition: 'New',
    availability: 'Limited',
    specs: {
      screen: '6.1" Super Retina XDR',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: 'Up to 23h video playback',
      processor: 'A16 Bionic'
    },
    description: 'Model i mëparshëm me çmim të reduktuar.'
  },
  {
    id: 5,
    brand: 'Apple',
    model: 'iPhone 13',
    image: '/images/phones/iphone-13.jpg',
    price: 699,
    originalPrice: 799,
    storage: '128GB',
    colors: ['Pink', 'Blue', 'Midnight', 'Starlight'],
    condition: 'Refurbished',
    availability: 'In Stock',
    specs: {
      screen: '6.1" Super Retina XDR',
      camera: '12MP Dual Camera',
      battery: 'Up to 19h video playback',
      processor: 'A15 Bionic'
    },
    description: 'Çmim i arsyeshëm për performancë të shkëlqyer.'
  },
  // Samsung Galaxy
  {
    id: 6,
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    image: '/images/phones/galaxy-s24-ultra.jpg',
    price: 1199,
    originalPrice: null,
    storage: '256GB',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Main + 50MP Telephoto',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Telefoni më i fuqishëm i Samsung me ekran dhe kamera premium.'
  },
  {
    id: 7,
    brand: 'Samsung',
    model: 'Galaxy S24+',
    image: '/images/phones/galaxy-s24-plus.jpg',
    price: 999,
    originalPrice: null,
    storage: '256GB',
    colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" Dynamic AMOLED 2X',
      camera: '50MP Main + 12MP Ultra Wide',
      battery: '4900mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Madhësi e përsosur me performancë premium.'
  },
  {
    id: 8,
    brand: 'Samsung',
    model: 'Galaxy S24',
    image: '/images/phones/galaxy-s24.jpg',
    price: 799,
    originalPrice: null,
    storage: '128GB',
    colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet', 'Amber Yellow'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.2" Dynamic AMOLED 2X',
      camera: '50MP Main + 12MP Ultra Wide',
      battery: '4000mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Telefon kompakt me karakteristika premium.'
  },
  {
    id: 9,
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    image: '/images/phones/galaxy-s23-ultra.jpg',
    price: 1099,
    originalPrice: 1199,
    storage: '256GB',
    colors: ['Phantom Black', 'Green', 'Lavender'],
    condition: 'New',
    availability: 'Limited',
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Main + 10MP Telephoto',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 2'
    },
    description: 'Model i mëparshëm me çmim të reduktuar.'
  },
  {
    id: 10,
    brand: 'Samsung',
    model: 'Galaxy A54 5G',
    image: '/images/phones/galaxy-a54.jpg',
    price: 449,
    originalPrice: null,
    storage: '128GB',
    colors: ['Awesome Violet', 'Awesome Graphite', 'Awesome Lime'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.4" Super AMOLED',
      camera: '50MP Main + 12MP Ultra Wide',
      battery: '5000mAh',
      processor: 'Exynos 1380'
    },
    description: 'Vlerë e shkëlqyer për çmim të arsyeshëm.'
  },
  // Xiaomi
  {
    id: 11,
    brand: 'Xiaomi',
    model: 'Xiaomi 14 Pro',
    image: '/images/phones/xiaomi-14-pro.jpg',
    price: 899,
    originalPrice: null,
    storage: '256GB',
    colors: ['Black', 'White', 'Blue'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.73" LTPO AMOLED',
      camera: '50MP Leica Triple Camera',
      battery: '4880mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Performancë premium me kamera Leica.'
  },
  {
    id: 12,
    brand: 'Xiaomi',
    model: 'Xiaomi 13',
    image: '/images/phones/xiaomi-13.jpg',
    price: 699,
    originalPrice: 799,
    storage: '256GB',
    colors: ['Black', 'Blue', 'White'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.36" AMOLED',
      camera: '50MP Leica Triple Camera',
      battery: '4500mAh',
      processor: 'Snapdragon 8 Gen 2'
    },
    description: 'Dizajn elegant me performancë të lartë.'
  },
  {
    id: 13,
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro',
    image: '/images/phones/redmi-note-13-pro.jpg',
    price: 349,
    originalPrice: null,
    storage: '128GB',
    colors: ['Midnight Black', 'Ocean Blue', 'Aurora Purple'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.67" AMOLED',
      camera: '200MP Main + 8MP Ultra Wide',
      battery: '5100mAh',
      processor: 'Snapdragon 7s Gen 2'
    },
    description: 'Vlerë e shkëlqyer me kamera 200MP.'
  },
  // Google Pixel
  {
    id: 14,
    brand: 'Google',
    model: 'Pixel 8 Pro',
    image: '/images/phones/pixel-8-pro.jpg',
    price: 999,
    originalPrice: null,
    storage: '128GB',
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" LTPO OLED',
      camera: '50MP Main + 48MP Telephoto',
      battery: '5050mAh',
      processor: 'Google Tensor G3'
    },
    description: 'Kamera më e mirë në telefon me AI të avancuar.'
  },
  {
    id: 15,
    brand: 'Google',
    model: 'Pixel 8',
    image: '/images/phones/pixel-8.jpg',
    price: 699,
    originalPrice: null,
    storage: '128GB',
    colors: ['Obsidian', 'Hazel', 'Rose'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.2" OLED',
      camera: '50MP Main + 12MP Ultra Wide',
      battery: '4575mAh',
      processor: 'Google Tensor G3'
    },
    description: 'Kamera profesionale në një telefon kompakt.'
  },
  {
    id: 16,
    brand: 'Google',
    model: 'Pixel 7a',
    image: '/images/phones/pixel-7a.jpg',
    price: 449,
    originalPrice: 499,
    storage: '128GB',
    colors: ['Charcoal', 'Snow', 'Sea'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.1" OLED',
      camera: '64MP Main + 13MP Ultra Wide',
      battery: '4385mAh',
      processor: 'Google Tensor G2'
    },
    description: 'Kamera Pixel në një çmim të arsyeshëm.'
  },
  // OnePlus
  {
    id: 17,
    brand: 'OnePlus',
    model: 'OnePlus 12',
    image: '/images/phones/oneplus-12.jpg',
    price: 799,
    originalPrice: null,
    storage: '256GB',
    colors: ['Silky Black', 'Flowy Emerald'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.82" LTPO AMOLED',
      camera: '50MP Main + 64MP Telephoto',
      battery: '5400mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Performancë e shpejtë me ngarkim ultra-të shpejtë.'
  },
  {
    id: 18,
    brand: 'OnePlus',
    model: 'OnePlus 11',
    image: '/images/phones/oneplus-11.jpg',
    price: 649,
    originalPrice: 699,
    storage: '128GB',
    colors: ['Titan Black', 'Eternal Green'],
    condition: 'Refurbished',
    availability: 'In Stock',
    specs: {
      screen: '6.7" LTPO AMOLED',
      camera: '50MP Main + 32MP Portrait',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 2'
    },
    description: 'Vlerë e shkëlqyer me performancë premium.'
  },
  // Huawei
  {
    id: 19,
    brand: 'Huawei',
    model: 'Huawei P60 Pro',
    image: '/images/phones/huawei-p60-pro.jpg',
    price: 899,
    originalPrice: null,
    storage: '256GB',
    colors: ['Rococo Pearl', 'Feather Purple', 'Black'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.67" OLED',
      camera: '48MP Main + 13MP Ultra Wide',
      battery: '4815mAh',
      processor: 'Snapdragon 8+ Gen 1'
    },
    description: 'Kamera e shkëlqyer me dizajn elegant.'
  },
  {
    id: 20,
    brand: 'Huawei',
    model: 'Huawei Nova 12',
    image: '/images/phones/huawei-nova-12.jpg',
    price: 499,
    originalPrice: null,
    storage: '256GB',
    colors: ['Black', 'Blue', 'Green'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" OLED',
      camera: '50MP Main + 8MP Ultra Wide',
      battery: '4600mAh',
      processor: 'Snapdragon 778G'
    },
    description: 'Dizajn modern me performancë të mirë.'
  },
  // Oppo
  {
    id: 21,
    brand: 'Oppo',
    model: 'Oppo Find X6 Pro',
    image: '/images/phones/oppo-find-x6-pro.jpg',
    price: 949,
    originalPrice: null,
    storage: '256GB',
    colors: ['Black', 'Green'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.82" LTPO AMOLED',
      camera: '50MP Main + 50MP Telephoto',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 2'
    },
    description: 'Kamera profesionale me ekran premium.'
  },
  {
    id: 22,
    brand: 'Oppo',
    model: 'Oppo Reno 11',
    image: '/images/phones/oppo-reno-11.jpg',
    price: 449,
    originalPrice: null,
    storage: '128GB',
    colors: ['Wave Green', 'Rock Grey'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" AMOLED',
      camera: '50MP Main + 32MP Portrait',
      battery: '4800mAh',
      processor: 'MediaTek Dimensity 7050'
    },
    description: 'Dizajn elegant me kamera të mirë.'
  },
  // Realme
  {
    id: 23,
    brand: 'Realme',
    model: 'Realme GT 5 Pro',
    image: '/images/phones/realme-gt-5-pro.jpg',
    price: 599,
    originalPrice: null,
    storage: '256GB',
    colors: ['Orange', 'Black'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.78" LTPO AMOLED',
      camera: '50MP Main + 8MP Telephoto',
      battery: '5400mAh',
      processor: 'Snapdragon 8 Gen 3'
    },
    description: 'Performancë e lartë me çmim konkurrues.'
  },
  // Motorola
  {
    id: 24,
    brand: 'Motorola',
    model: 'Motorola Edge 40 Pro',
    image: '/images/phones/motorola-edge-40-pro.jpg',
    price: 649,
    originalPrice: 749,
    storage: '256GB',
    colors: ['Lunar Blue', 'Eclipse Black'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.67" pOLED',
      camera: '50MP Main + 50MP Ultra Wide',
      battery: '4600mAh',
      processor: 'Snapdragon 8 Gen 2'
    },
    description: 'Performancë e lartë me dizajn modern.'
  },
  // Nothing
  {
    id: 25,
    brand: 'Nothing',
    model: 'Nothing Phone (2)',
    image: '/images/phones/nothing-phone-2.jpg',
    price: 599,
    originalPrice: null,
    storage: '128GB',
    colors: ['White', 'Dark Gray'],
    condition: 'New',
    availability: 'In Stock',
    specs: {
      screen: '6.7" LTPO OLED',
      camera: '50MP Main + 50MP Ultra Wide',
      battery: '4700mAh',
      processor: 'Snapdragon 8+ Gen 1'
    },
    description: 'Dizajn unik me Glyph Interface.'
  }
]

// Filter options
export const brands = ['All', ...new Set(phones.map(p => p.brand))]
export const conditions = ['All', 'New', 'Refurbished', 'Used']
export const storageOptions = ['All', '128GB', '256GB', '512GB']
export const priceRanges = [
  { label: 'All', min: 0, max: 9999 },
  { label: 'Under €500', min: 0, max: 500 },
  { label: '€500 - €700', min: 500, max: 700 },
  { label: '€700 - €1000', min: 700, max: 1000 },
  { label: 'Over €1000', min: 1000, max: 9999 }
]
