'use client'

import { useState } from 'react'
import { FaGift, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function SpecialOffers() {
  const [isVisible, setIsVisible] = useState(true)

  const offers = [
    {
      id: 1,
      title: '20% Zbritje për Ndryshim Ekrani',
      description: 'Kjo javë - Çmime speciale për riparime ekrani',
      validUntil: '31 Janar 2025',
      cta: 'Rezervo Tani',
      link: '/contact#booking',
      highlight: true
    },
    {
      id: 2,
      title: 'Diagnostikim Falas',
      description: 'Kontrolloni problemin e telefonit tuaj pa pagesë',
      validUntil: 'Gjithmonë',
      cta: 'Kontakto',
      link: '/contact',
      highlight: false
    }
  ]

  if (!isVisible) return null

  return (
    <section className="special-offers">
      <div className="container">
        <div className="offers-header">
          <div className="offers-title">
            <FaGift className="offers-icon" />
            <h2>Oferta Speciale</h2>
          </div>
          <button 
            className="offers-close"
            onClick={() => setIsVisible(false)}
            aria-label="Mbyll ofertat"
          >
            <FaTimes />
          </button>
        </div>
        <div className="offers-grid">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className={`offer-card ${offer.highlight ? 'highlight' : ''}`}
            >
              <div className="offer-badge">OFERTË</div>
              <h3>{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <p className="offer-valid">E vlefshme deri: {offer.validUntil}</p>
              <Link href={offer.link} className="btn btn-primary btn-sm">
                {offer.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
