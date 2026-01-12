'use client'

import { useInView } from 'react-intersection-observer'

export default function SocialProof() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const badges = [
    { name: 'Vlerësime 5 Yje', icon: '⭐', count: '23+' },
    { name: 'Vite Përvojë', icon: '🚀', count: '5+' },
    { name: 'Klientë të Kënaqur', icon: '😊', count: '100%' },
    { name: 'Riparime të Kryera', icon: '🎯', count: '6.5K+' },
  ]

  const partners = [
    'Apple Authorized',
    'Samsung Service',
    'Huawei Partner',
    'Xiaomi Certified',
    'OnePlus Service',
    'Google Pixel'
  ]

  return (
    <section className="social-proof" ref={ref}>
      <div className="container">
        <div className={`social-proof-content ${inView ? 'animate-fadeIn' : ''}`}>
          <h3 className="social-proof-title">E Merituar nga Klientët Tanë</h3>
          <div className="trust-badges">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`trust-badge ${inView ? 'animate-scaleIn' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-count">{badge.count}</div>
                <div className="badge-name">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`partners-section ${inView ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.4s' }}>
          <h3 className="partners-title">Markat që Servisojmë</h3>
          <div className="partners-list">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-item"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className={`award-section ${inView ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="award-badge">
            <span className="award-icon">🏆</span>
            <span className="award-text">
              Qendra #1 për Riparime Telefonash në Mitrovicë
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
