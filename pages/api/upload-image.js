/**
 * Image Upload API
 * Handles image uploads using Vercel Blob or fallback to base64
 */

import { put } from '@vercel/blob'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // 10MB max file size
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { image, filename } = req.body

    if (!image) {
      return res.status(400).json({ error: 'No image provided' })
    }

    // Check if it's a base64 image or a data URL
    let imageData = image
    let contentType = 'image/jpeg'

    if (image.startsWith('data:image/')) {
      // Extract base64 data and content type
      const matches = image.match(/^data:image\/(\w+);base64,(.+)$/)
      if (matches) {
        contentType = `image/${matches[1]}`
        imageData = matches[2]
      }
    }

    // Try to use Vercel Blob if available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        // Convert base64 to buffer
        const buffer = Buffer.from(imageData, 'base64')
        
        // Upload to Vercel Blob
        const blob = await put(filename || `product-${Date.now()}.jpg`, buffer, {
          access: 'public',
          contentType: contentType,
        })

        return res.status(200).json({ 
          url: blob.url,
          success: true 
        })
      } catch (blobError) {
        console.error('Vercel Blob error:', blobError)
        // Fall through to base64 fallback
      }
    }

    // Fallback: Return base64 data URL (not ideal for production, but works)
    // In production, you should use Vercel Blob or another storage service
    return res.status(200).json({ 
      url: image, // Return the original data URL
      success: true,
      note: 'Using base64 storage. Consider setting up Vercel Blob for better performance.'
    })

  } catch (error) {
    console.error('Upload error:', error)
    return res.status(500).json({ error: 'Failed to upload image: ' + error.message })
  }
}
