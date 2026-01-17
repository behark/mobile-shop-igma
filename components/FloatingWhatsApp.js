'use client'

import { useEffect, useState } from 'react'

export default function FloatingWhatsApp() {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    // Hide WhatsApp button if Tawk.to is loaded (to avoid overlap)
    // Check if Tawk.to is configured
    const hasTawkTo = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID && process.env.NEXT_PUBLIC_TAWK_WIDGET_ID
    
    if (hasTawkTo) {
      // Wait a bit for Tawk.to to load, then hide WhatsApp button
      const timer = setTimeout(() => {
        if (window.Tawk_API) {
          setShowButton(false)
        }
      }, 2000) // Give Tawk.to 2 seconds to load

      return () => clearTimeout(timer)
    }
  }, [])

  // Don't render if Tawk.to is active
  if (!showButton) {
    return null
  }

  return (
    <a
      href="https://wa.me/38345444244?text=Përshëndetje! Jam i interesuar për shërbimet tuaja."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Shkruani në WhatsApp"
      className="floating-whatsapp"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-text">WhatsApp</span>
    </a>
  )
}
