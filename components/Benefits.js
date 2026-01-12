'use client'

import { useInView } from 'react-intersection-observer'

export default function Benefits() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: '⚡',
      title: 'Riparim i Shpejtë',
      description: 'Riparojmë telefonat tuaja në kohë rekord. Shumica e riparimeve përfundojnë brenda 30-60 minutave.'
    },
    {
      icon: '🛡️',
      title: 'Garanci 100%',
      description: 'Ofrojmë garanci 3-6 muaj për të gjitha riparimet. Nëse ka problem, ne e zgjidhim falas.'
    },
    {
      icon: '💰',
      title: 'Çmime Konkurruese',
      description: 'Çmime të arsyeshme dhe transparente. Nuk ka kosto të fshehura - çmimi që shihni është çmimi që paguani.'
    },
    {
      icon: '🔧',
      title: 'Ekspertë të Kualifikuar',
      description: 'Ekipi ynë ka vite përvojë në riparimin e të gjitha modeleve të telefonave mobil.'
    },
    {
      icon: '📱',
      title: 'Pjesë Origjinale',
      description: 'Përdorim vetëm pjesë origjinale dhe me cilësi të lartë për të gjitha riparimet.'
    },
    {
      icon: '⭐',
      title: '100% Kënaqësi',
      description: '6.5K+ klientë të kënaqur dhe 100% normë rekomandimi. Krenohemi me shërbimin tonë.'
    }
  ]

  return (
    <section id="benefits" className="benefits" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Pse të Zgjidhni Ne?</h2>
          <p>Arsyet pse klientët tanë na besojnë telefonat e tyre</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card ${inView ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
