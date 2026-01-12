'use client'

import { useInView } from 'react-intersection-observer'
import { FaMobileAlt, FaUnlock, FaDesktop, FaTools } from 'react-icons/fa'

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaMobileAlt,
      title: 'Shitje dhe Ndryshim Telefonash',
      subtitle: 'Bejme shitjen dhe nderrimin e telefonave mobil',
      description: 'Ofrojmë një përzgjedhje të gjerë telefonash mobil të reja dhe të rinovuara. Shkëmbeni pajisjen tuaj të vjetër ose përmirësohuni në modelet më të fundit.'
    },
    {
      icon: FaUnlock,
      title: 'Dekodim Telefonash',
      subtitle: 'Dekodimin e telefonave',
      description: 'Shërbime profesionale për çlirimin dhe dekodimin e telefonave. Çlironi pajisjen tuaj nga çdo operator shpejt dhe sigurt.'
    },
    {
      icon: FaDesktop,
      title: 'Ndryshim Ekranesh dhe Xhamash',
      subtitle: 'Ndrrimin e xhamave dhe ekranave te Telefonave',
      description: 'Ndryshim ekspert i ekranave dhe xhamave për të gjitha modelet e telefonave mobil. Pjesë zëvendësuese origjinale dhe me cilësi të lartë në dispozicion.'
    },
    {
      icon: FaTools,
      title: 'Riparim Telefonash Mobil',
      subtitle: 'Servisim te gjith Telefonat Mobil etj',
      description: 'Shërbime të plota riparimi për të gjitha telefonat mobil. Nga ndryshimi i baterisë deri te problemet e softuerit, ne jemi këtu për ju.'
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Shërbimet Tona</h2>
          <p>Zgjidhje të plota për telefonat mobil për të gjitha nevojat tuaja</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className={`service-card ${inView ? 'animate-fadeIn' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-desc">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
