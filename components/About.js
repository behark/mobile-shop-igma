'use client'

import AnimatedCounter from './AnimatedCounter'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: 6.5, suffix: 'K+', label: 'Klientë të Kënaqur' },
    { value: 100, suffix: '%', label: 'Normë Rekomandimi' },
    { value: 23, suffix: '+', label: 'Vlerësime 5 Yje' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Rreth Mobile Shop IGMA</h2>
            <p>
              Mobile Shop IGMA është një qendër e besuar shërbimi për telefonat mobil e vendosur në Mitrovicë, Kosovë. 
              Me vite përvojë në industrinë e telefonave mobil, ne ofrojmë shërbime të plota për të mbajtur pajisjet tuaja në funksionim të mirë.
            </p>
            <p>
              Ekipi ynë i teknikëve të kualifikuar është i përkushtuar për të ofruar riparime, shitje dhe shërbime me cilësi të lartë. 
              Krenohemi me normën tonë 100% të kënaqësisë së klientëve dhe jemi të përkushtuar për të ofruar shërbimin më të mirë të mundshëm.
            </p>
            <div ref={ref} className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>
                    {inView && (
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    )}
                    {!inView && `${stat.value}${stat.suffix}`}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
