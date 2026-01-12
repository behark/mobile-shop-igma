'use client'

import { useState } from 'react'
import { FaPhone, FaMobileAlt, FaTools, FaShieldAlt } from 'react-icons/fa'

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState('')
  const [phoneModel, setPhoneModel] = useState('')
  const [issue, setIssue] = useState('')
  const [quote, setQuote] = useState(null)

  const services = [
    { id: 'screen', name: 'Ndryshim Ekrani', basePrice: 50, icon: FaMobileAlt },
    { id: 'battery', name: 'Ndryshim Baterie', basePrice: 25, icon: FaPhone },
    { id: 'repair', name: 'Riparim', basePrice: 40, icon: FaTools },
    { id: 'unlock', name: 'Dekodim', basePrice: 20, icon: FaShieldAlt }
  ]

  const calculateQuote = (e) => {
    e.preventDefault()
    if (!selectedService || !phoneModel) {
      alert('Ju lutem plotësoni të gjitha fushat')
      return
    }

    const service = services.find(s => s.id === selectedService)
    if (service) {
      // Simple calculation - in real app, this would be more complex
      let price = service.basePrice
      
      // Adjust based on phone model (premium brands cost more)
      if (phoneModel.toLowerCase().includes('iphone') || phoneModel.toLowerCase().includes('samsung')) {
        price *= 1.2
      }
      
      setQuote({
        service: service.name,
        phoneModel,
        estimatedPrice: Math.round(price),
        currency: '€'
      })
    }
  }

  return (
    <section id="quote-calculator" className="quote-calculator">
      <div className="container">
        <div className="section-header">
          <h2>Llogaritësi i Çmimit</h2>
          <p>Merrni një vlerësim të shpejtë për riparimin tuaj</p>
        </div>
        <div className="calculator-wrapper">
          <form onSubmit={calculateQuote} className="calculator-form">
            <div className="form-group">
              <label>Zgjidhni Shërbimin</label>
              <div className="service-options">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className={`service-option ${selectedService === service.id ? 'selected' : ''}`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <Icon />
                      <span>{service.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneModel">Modeli i Telefonit</label>
              <input
                type="text"
                id="phoneModel"
                value={phoneModel}
                onChange={(e) => setPhoneModel(e.target.value)}
                placeholder="P.sh. iPhone 12, Samsung Galaxy S21"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="issue">Përshkrimi i Problemit (Opsionale)</label>
              <textarea
                id="issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Përshkruani problemin..."
                rows="3"
              />
            </div>
            <button type="submit" className="btn btn-primary calculator-submit">
              Llogarit Çmimin
            </button>
          </form>
          
          {quote && (
            <div className="quote-result">
              <h3>Vlerësimi Juaj</h3>
              <div className="quote-details">
                <p><strong>Shërbimi:</strong> {quote.service}</p>
                <p><strong>Modeli:</strong> {quote.phoneModel}</p>
                <div className="quote-price">
                  <span className="price-label">Çmimi i Vlerësuar:</span>
                  <span className="price-value">{quote.estimatedPrice}{quote.currency}</span>
                </div>
                <p className="quote-note">* Ky është një vlerësim. Çmimi përfundimtar mund të ndryshojë pas diagnostikimit.</p>
                <a href="/contact" className="btn btn-primary">
                  Kontaktoni për Vlerësim të Saktë
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
