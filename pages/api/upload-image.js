/**
 * Image Upload API
 * Handles image uploads using Vercel Blob or fallback to base64
 */

import { put } from '@vercel/blob'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4.5mb', // Vercel Blob server upload limit is 4.5MB
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
    let fileExtension = 'jpg'

    if (image.startsWith('data:image/')) {
      // Extract base64 data and content type
      const matches = image.match(/^data:image\/(\w+);base64,(.+)$/)
      if (matches) {
        contentType = `image/${matches[1]}`
        fileExtension = matches[1] === 'png' ? 'png' : matches[1] === 'webp' ? 'webp' : 'jpg'
        imageData = matches[2]
      }
    }

    // Try to use Vercel Blob if available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        // Convert base64 to buffer
        const buffer = Buffer.from(imageData, 'base64')
        
        // Generate filename if not provided
        const blobFilename = filename || `product-${Date.now()}.${fileExtension}`
        
        // Upload to Vercel Blob
        const blob = await put(blobFilename, buffer, {
          access: 'public',
          contentType: contentType,
        })

        console.log('Image uploaded to Vercel Blob:', blob.url)
        return res.status(200).json({ 
          url: blob.url,
          success: true,
          storage: 'vercel-blob'
        })
      } catch (blobError) {
        console.error('Vercel Blob error:', blobError)
        // Fall through to base64 fallback
        return res.status(500).json({ 
          error: 'Failed to upload to Vercel Blob: ' + blobError.message,
          fallback: 'Try again or check Blob configuration'
        })
      }
    }

    // Fallback: Return base64 data URL (works but not ideal for large images)
    // Note: This stores the image in the database, which can get large
    console.warn('Vercel Blob not configured, using base64 fallback')
    return res.status(200).json({ 
      url: image, // Return the original data URL
      success: true,
      storage: 'base64',
      note: 'Using base64 storage. Set up Vercel Blob for better performance.'
    })

  } catch (error) {
    console.error('Upload error:', error)
    return res.status(500).json({ error: 'Failed to upload image: ' + error.message })
  }
}
