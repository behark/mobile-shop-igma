import { loadAccessories, saveAccessories, initializeStorage } from '@/lib/accessories-storage'
import { defaultAccessories } from '@/lib/accessories-data'

// Disable body parsing for this route (Next.js handles it automatically)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

// Simple authentication check (in production, use proper authentication)
function isAuthenticated(req) {
  // For now, we'll use a simple password check
  // In production, implement proper JWT or session-based auth
  const authHeader = req.headers.authorization
  const password = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false
  }
  
  const token = authHeader.substring(7)
  return token === password
}

export default async function handler(req, res) {
  try {
    // Initialize storage on first request
    await initializeStorage()
    
    // Load accessories from storage (KV or default)
    let currentAccessories = await loadAccessories()
    
    // If empty, use default data
    if (currentAccessories.length === 0 && defaultAccessories.length > 0) {
      currentAccessories = defaultAccessories
      await saveAccessories(defaultAccessories)
    }

    // Check authentication for write operations
    if (req.method !== 'GET' && !isAuthenticated(req)) {
      console.log('Unauthorized request:', req.method, req.headers.authorization)
      return res.status(401).json({ error: 'Unauthorized' })
    }

  switch (req.method) {
    case 'GET':
      // Return all accessories
      res.status(200).json(currentAccessories)
      break

    case 'POST':
      // Add new accessory
      try {
        console.log('POST request received:', req.body)
        const nextId = currentAccessories.length > 0 
          ? Math.max(...currentAccessories.map(a => a.id)) + 1 
          : 1
        
        const newAccessory = {
          id: nextId,
          name: req.body.name,
          price: parseFloat(req.body.price),
          image: req.body.image || '📱',
          category: req.body.category || 'Aksesorë',
          inStock: req.body.inStock !== undefined ? req.body.inStock : true,
          description: req.body.description || ''
        }

        console.log('New accessory object:', newAccessory)

        // Validate required fields
        if (!newAccessory.name || !newAccessory.price || isNaN(newAccessory.price)) {
          console.log('Validation failed:', { name: newAccessory.name, price: newAccessory.price })
          return res.status(400).json({ error: 'Name and valid price are required' })
        }

        currentAccessories.push(newAccessory)
        console.log('Saving accessories, count:', currentAccessories.length)
        await saveAccessories(currentAccessories)
        console.log('Accessory saved successfully')
        res.status(201).json(newAccessory)
      } catch (error) {
        console.error('Error adding accessory:', error)
        return res.status(500).json({ error: 'Failed to add accessory: ' + error.message })
      }
      break

    case 'PUT':
      // Update existing accessory
      const { id, ...updates } = req.body
      const index = currentAccessories.findIndex(a => a.id === parseInt(id))

      if (index === -1) {
        return res.status(404).json({ error: 'Accessory not found' })
      }

      currentAccessories[index] = { ...currentAccessories[index], ...updates }
      await saveAccessories(currentAccessories)
      res.status(200).json(currentAccessories[index])
      break

    case 'DELETE':
      // Delete accessory
      const deleteId = parseInt(req.query.id)
      const deleteIndex = currentAccessories.findIndex(a => a.id === deleteId)

      if (deleteIndex === -1) {
        return res.status(404).json({ error: 'Accessory not found' })
      }

      currentAccessories.splice(deleteIndex, 1)
      await saveAccessories(currentAccessories)
      res.status(200).json({ message: 'Accessory deleted successfully' })
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
