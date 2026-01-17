/**
 * Image Configuration
 * Centralized image paths and placeholders
 * Replace placeholder paths with actual images when available
 */

export const galleryImages = [
  {
    id: 1,
    title: 'Riparim Ekrani iPhone',
    category: 'Ndryshim Ekrani',
    image: '/images/gallery/repair-iphone-screen.jpg', // Replace with actual image
    icon: '📱', // Fallback if image not available
    alt: 'Riparim ekrani iPhone në Mobile Shop IGMA'
  },
  {
    id: 2,
    title: 'Riparim Baterie Samsung',
    category: 'Ndryshim Baterie',
    image: '/images/gallery/repair-samsung-battery.jpg',
    icon: '🔋',
    alt: 'Ndryshim baterie Samsung'
  },
  {
    id: 3,
    title: 'Dekodim Telefoni',
    category: 'Dekodim',
    image: '/images/gallery/unlock-phone.jpg',
    icon: '🔓',
    alt: 'Dekodim telefoni mobil'
  },
  {
    id: 4,
    title: 'Riparim Kamere',
    category: 'Riparim',
    image: '/images/gallery/repair-camera.jpg',
    icon: '📷',
    alt: 'Riparim kamere telefoni'
  },
  {
    id: 5,
    title: 'Ndryshim Xham',
    category: 'Ndryshim Xham',
    image: '/images/gallery/screen-replacement.jpg',
    icon: '🖥️',
    alt: 'Ndryshim xham telefoni'
  },
  {
    id: 6,
    title: 'Riparim Kompleks',
    category: 'Riparim',
    image: '/images/gallery/complex-repair.jpg',
    icon: '🔧',
    alt: 'Riparim kompleks telefoni'
  }
]

export const productImages = {
  phones: {
    path: '/images/products/phones.jpg',
    icon: '📱',
    alt: 'Telefonat mobil në shitje'
  },
  cases: {
    path: '/images/products/phone-cases.jpg',
    icon: '📱',
    alt: 'Kutitë për telefona'
  },
  accessories: {
    path: '/images/products/accessories.jpg',
    icon: '🔋',
    alt: 'Aksesorë për telefona'
  },
  screenProtectors: {
    path: '/images/products/screen-protectors.jpg',
    icon: '🛡️',
    alt: 'Mbrojtës ekrani'
  }
}

export const serviceImages = {
  repair: {
    path: '/images/services/repair.jpg',
    icon: '🔧',
    alt: 'Shërbim riparimi'
  },
  unlock: {
    path: '/images/services/unlock.jpg',
    icon: '🔓',
    alt: 'Shërbim dekodimi'
  },
  screen: {
    path: '/images/services/screen-replacement.jpg',
    icon: '🖥️',
    alt: 'Ndryshim ekrani'
  },
  battery: {
    path: '/images/services/battery-replacement.jpg',
    icon: '🔋',
    alt: 'Ndryshim baterie'
  }
}

/**
 * Check if image exists, return fallback if not
 */
export function getImageSrc(imagePath, fallbackIcon) {
  // In production, you would check if image exists
  // For now, return the path (Next.js Image will handle 404s)
  return imagePath
}

/**
 * Get image with fallback
 */
export function getImageWithFallback(item) {
  if (item.image && item.image.startsWith('/')) {
    return {
      type: 'image',
      src: item.image,
      alt: item.alt || item.title
    }
  }
  return {
    type: 'icon',
    icon: item.icon || '📱',
    alt: item.alt || item.title
  }
}
