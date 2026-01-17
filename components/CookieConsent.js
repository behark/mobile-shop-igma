'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-modal="true"
    >
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <span className="cookie-icon">🍪</span>
          <div>
            <h3 id="cookie-consent-title">Cilësimet e Cookies</h3>
            <p>
              Ne përdorim cookies për t'ju ofruar përvojën më të mirë në faqen tonë web. 
              Duke përdorur faqen tonë, ju pranoni përdorimin e cookies. 
              Për më shumë informacion, shikoni{' '}
              <a href="#privacy" className="cookie-link">
                politikën tonë të privatësisë
              </a>
              .
            </p>
          </div>
        </div>
        <div className="cookie-consent-buttons">
          <button
            onClick={acceptCookies}
            className="btn btn-primary cookie-btn"
            aria-label="Prano cookies"
          >
            Pranoj
          </button>
          <button
            onClick={declineCookies}
            className="btn btn-secondary cookie-btn"
            aria-label="Refuzo cookies"
          >
            Refuzoj
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="cookie-close"
          aria-label="Mbyll bannerin e cookies"
        >
          ×
        </button>
      </div>
    </div>
  )
}
