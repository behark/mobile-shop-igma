/**
 * Admin Login API
 * Verifies admin password (server-side only)
 */

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

  if (password === adminPassword) {
    // Return success (password is correct)
    // In production, you might want to generate a JWT token here
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ error: 'Invalid password' })
  }
}
