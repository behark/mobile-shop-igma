/**
 * Accessories/Products Data
 * This file stores all accessories products that can be managed via admin dashboard
 * Default data - will be loaded from file in production
 */

export const defaultAccessories = [
  {
    id: 1,
    name: 'Kutitë Premium iPhone',
    price: 15,
    image: '📱',
    category: 'Kutitë',
    inStock: true,
    description: 'Kutitë premium për iPhone me mbrojtje të plotë'
  },
  {
    id: 2,
    name: 'Kutitë Premium Samsung',
    price: 12,
    image: '📱',
    category: 'Kutitë',
    inStock: true,
    description: 'Kutitë premium për Samsung me dizajn modern'
  },
  {
    id: 3,
    name: 'Mbrojtës Ekrani Tempered Glass',
    price: 8,
    image: '🛡️',
    category: 'Aksesorë',
    inStock: true,
    description: 'Mbrojtës ekrani me cilësi të lartë, transparent dhe rezistent'
  },
  {
    id: 4,
    name: 'Karikues i Shpejtë',
    price: 20,
    image: '🔋',
    category: 'Aksesorë',
    inStock: true,
    description: 'Karikues i shpejtë me teknologji moderne'
  },
  {
    id: 5,
    name: 'Kabllo USB-C',
    price: 10,
    image: '🔌',
    category: 'Aksesorë',
    inStock: true,
    description: 'Kabllo USB-C me cilësi të lartë, 1m gjatësi'
  },
  {
    id: 6,
    name: 'Kutitë Karl Lagerfeld',
    price: 10,
    image: '📱',
    category: 'Kutitë',
    inStock: true,
    description: 'Kutitë elegante nga Karl Lagerfeld'
  }
]

// Export for backward compatibility
export let accessories = defaultAccessories
