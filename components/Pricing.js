export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Riparim Bazë',
      price: 'Nga 20€',
      features: [
        'Ndryshim baterie',
        'Ndryshim port USB',
        'Pastrim telefon',
        'Diagnostikim problem',
        'Garanci 3 muaj'
      ],
      popular: false
    },
    {
      name: 'Riparim Standard',
      price: 'Nga 50€',
      features: [
        'Ndryshim ekran',
        'Ndryshim xham',
        'Riparim butonash',
        'Ndryshim kamere',
        'Garanci 3 muaj',
        'Konsultim falas'
      ],
      popular: true
    },
    {
      name: 'Riparim Premium',
      price: 'Nga 100€',
      features: [
        'Riparim kompleks',
        'Ndryshim motherboard',
        'Riparim uji',
        'Dekodim telefon',
        'Garanci 6 muaj',
        'Shërbim urgjent',
        'Konsultim dhe mbështetje'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Çmimet Tona</h2>
          <p>Paketa të arsyeshme për çdo nevojë</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-badge">Më i Popullarizuar</div>
              )}
              <h3>{plan.name}</h3>
              <div className="pricing-price">{plan.price}</div>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary pricing-btn">
                Kontaktoni Tani
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
