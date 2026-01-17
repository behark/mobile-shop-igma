// API route for sending emails
// This is a basic implementation that can be extended with services like Resend, SendGrid, etc.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { to, subject, body, type } = req.body

    // Validate required fields
    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // In production, you would use an email service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll log the email and return success
    // You can integrate with an email service by:
    // 1. Installing: npm install resend
    // 2. Setting RESEND_API_KEY in .env.local
    // 3. Uncommenting the code below

    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: 'Mobile Shop IGMA <noreply@igmaunlock.com>',
      to: [to],
      subject: subject,
      html: body,
    })

    if (error) {
      return res.status(500).json({ error: error.message })
    }
    */

    // Log email for development (remove in production)
    console.log('Email would be sent:', {
      to,
      subject,
      type,
      timestamp: new Date().toISOString()
    })

    // Return success
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      // In production with Resend, you might return: emailId: data.id
    })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
