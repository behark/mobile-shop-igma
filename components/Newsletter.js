'use client'

import { useState } from 'react'
import { FaEnvelope, FaCheck } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real app, this would send to a backend/newsletter service
    // For now, we'll just show success message
    if (email) {
      setSubscribed(true)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 3000)
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <FaEnvelope />
          </div>
          <div className="newsletter-text">
            <h3>Abonohuni në Newsletter</h3>
            <p>Merrni oferta ekskluzive dhe lajme për shërbimet tona</p>
          </div>
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email-i juaj"
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary newsletter-submit">
                Abonohu
              </button>
            </form>
          ) : (
            <div className="newsletter-success">
              <FaCheck />
              <span>Faleminderit për abonimin!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
