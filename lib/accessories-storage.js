/**
 * Accessories Storage
 * Handles storage of accessories using Upstash Redis or falls back to default data
 */

import { defaultAccessories } from './accessories-data'

// Check if we're using Upstash Redis
const USE_REDIS = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN

let redisClient = null

// Initialize Redis client if available
if (USE_REDIS && typeof window === 'undefined') {
  try {
    const { Redis } = require('@upstash/redis')
    redisClient = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    })
  } catch (e) {
    console.warn('Upstash Redis not available, using default data:', e.message)
  }
}

const KV_KEY = 'accessories'

/**
 * Load accessories from storage
 */
export async function loadAccessories() {
  // Client-side: return empty array (data will be loaded via API)
  if (typeof window !== 'undefined') {
    return []
  }

  // Server-side: Try Redis first, then fall back to default
  if (USE_REDIS && redisClient) {
    try {
      const data = await redisClient.get(KV_KEY)
      if (data && Array.isArray(data) && data.length > 0) {
        return data
      }
    } catch (error) {
      console.error('Error loading from Redis:', error)
    }
  }

  // Fallback to default accessories
  return defaultAccessories
}

/**
 * Save accessories to storage
 */
export async function saveAccessories(accessories) {
  // Client-side: not supported (use API)
  if (typeof window !== 'undefined') {
    throw new Error('Cannot save accessories from client-side')
  }

  // Server-side: Save to Redis
  if (USE_REDIS && redisClient) {
    try {
      await redisClient.set(KV_KEY, accessories)
      return true
    } catch (error) {
      console.error('Error saving to Redis:', error)
      throw error
    }
  }

  // If no KV, this is a no-op (for local development with file system)
  console.warn('No storage available, data not persisted')
  return false
}

/**
 * Initialize storage with default data if empty
 */
export async function initializeStorage() {
  if (typeof window !== 'undefined') {
    return
  }

  if (USE_REDIS && redisClient) {
    try {
      const existing = await redisClient.get(KV_KEY)
      if (!existing || !Array.isArray(existing) || existing.length === 0) {
        await redisClient.set(KV_KEY, defaultAccessories)
        console.log('Initialized Redis with default accessories')
      }
    } catch (error) {
      console.error('Error initializing Redis:', error)
    }
  }
}
