'use client'

import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import Link from 'next/link'

export default function LocationPreview() {
  const address = {
    street: 'Rr. Mbrëtresha Teutë',
    city: 'Mitrovicë',
    country: 'Kosovë',
    full: 'Rr. Mbrëtresha Teutë, Mitrovicë, Kosovë'
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.full)}`
  // Using a simpler embed URL that works without API key
  const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address.full)}&output=embed`

  return (
    <section className="location-preview">
      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <div className="location-header">
              <FaMapMarkerAlt className="location-icon" />
              <h2>Gjeni Ne</h2>
            </div>
            <div className="location-address">
              <p className="address-street">{address.street}</p>
              <p className="address-city">{address.city}, {address.country}</p>
            </div>
            <div className="location-actions">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaDirections /> Udhëzime
              </a>
              <Link href="/contact#map" className="btn btn-secondary">
                Shiko Hartenë
              </Link>
            </div>
          </div>
          <div className="location-map">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mobile Shop IGMA Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
