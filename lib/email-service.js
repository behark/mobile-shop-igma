/**
 * Email service utility
 * Handles sending emails for notifications
 */

export async function sendEmailNotification({ to, subject, body, type = 'general' }) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject,
        body,
        type,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email')
    }

    return data
  } catch (error) {
    console.error('Email notification error:', error)
    throw error
  }
}

export function formatBookingEmail(bookingData) {
  const { name, phone, email, service, date, time, message } = bookingData
  
  return {
    subject: `Rezervim i ri: ${service} - ${date}`,
    body: `
      <h2>Rezervim i ri për shërbim</h2>
      <p><strong>Emri:</strong> ${name}</p>
      <p><strong>Telefoni:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Shërbimi:</strong> ${service}</p>
      <p><strong>Data:</strong> ${date}</p>
      <p><strong>Koha:</strong> ${time}</p>
      ${message ? `<p><strong>Mesazh:</strong> ${message}</p>` : ''}
      <hr>
      <p><small>Kjo është një njoftim automatik nga faqja web e Mobile Shop IGMA.</small></p>
    `
  }
}

export function formatContactEmail(contactData) {
  const { name, email, phone, message } = contactData
  
  return {
    subject: `Mesazh i ri nga ${name}`,
    body: `
      <h2>Mesazh i ri nga faqja web</h2>
      <p><strong>Emri:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoni:</strong> ${phone || 'N/A'}</p>
      <p><strong>Mesazhi:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Kjo është një njoftim automatik nga faqja web e Mobile Shop IGMA.</small></p>
    `
  }
}

export function formatRepairStatusEmail(repairData) {
  const { trackingId, status, phone, service } = repairData
  
  return {
    subject: `Status i ri për riparimin ${trackingId}`,
    body: `
      <h2>Përditësim i statusit të riparimit</h2>
      <p><strong>ID Tracking:</strong> ${trackingId}</p>
      <p><strong>Telefoni:</strong> ${phone}</p>
      <p><strong>Shërbimi:</strong> ${service}</p>
      <p><strong>Status i ri:</strong> ${status}</p>
      <hr>
      <p><small>Kjo është një njoftim automatik nga faqja web e Mobile Shop IGMA.</small></p>
    `
  }
}
