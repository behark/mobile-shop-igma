import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaMobileAlt, FaUnlock, FaDesktop, FaTools, FaCheck, FaTimes, FaClock, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'
import { serviceImages, getImageWithFallback } from '@/lib/image-config'
import Link from 'next/link'

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      icon: FaMobileAlt,
      title: 'Shitje dhe Ndryshim Telefonash',
      subtitle: 'Bejme shitjen dhe nderrimin e telefonave mobil',
      description: 'Ofrojmë një përzgjedhje të gjerë telefonash mobil të reja dhe të rinovuara. Shkëmbeni pajisjen tuaj të vjetër ose përmirësohuni në modelet më të fundit.',
      image: serviceImages.repair,
      priceRange: 'Nga €50',
      repairTime: '30-60 min',
      warranty: '6 muaj garanci',
      included: [
        'Konsultim falas',
        'Testim i plotë',
        'Garanci 6 muaj',
        'Pjesë origjinale'
      ],
      notIncluded: [
        'Aksesorë (opsionale)',
        'Riparime të tjera (vlerësohen veçmas)'
      ]
    },
    {
      icon: FaUnlock,
      title: 'Dekodim Telefonash',
      subtitle: 'Dekodimin e telefonave',
      description: 'Shërbime profesionale për çlirimin dhe dekodimin e telefonave. Çlironi pajisjen tuaj nga çdo operator shpejt dhe sigurt.',
      image: serviceImages.unlock,
      priceRange: 'Nga €20',
      repairTime: '15-30 min',
      warranty: 'Garanci 100%',
      included: [
        'Dekodim i plotë',
        'Testim i funksionimit',
        'Garanci 100%',
        'Shërbim i shpejtë'
      ],
      notIncluded: [
        'Riparime të tjera',
        'Aksesorë'
      ]
    },
    {
      icon: FaDesktop,
      title: 'Ndryshim Ekranesh dhe Xhamash',
      subtitle: 'Ndrrimin e xhamave dhe ekranave te Telefonave',
      description: 'Ndryshim ekspert i ekranave dhe xhamave për të gjitha modelet e telefonave mobil. Pjesë zëvendësuese origjinale dhe me cilësi të lartë në dispozicion.',
      image: serviceImages.screen,
      priceRange: 'Nga €40',
      repairTime: '30-60 min',
      warranty: '6 muaj garanci',
      included: [
        'Xham origjinal',
        'Instalim profesional',
        'Garanci 6 muaj',
        'Testim i plotë',
        'Mbrojtje e të dhënave'
      ],
      notIncluded: [
        'Riparime të tjera',
        'Aksesorë (mbrojtës ekrani)'
      ]
    },
    {
      icon: FaTools,
      title: 'Riparim Telefonash Mobil',
      subtitle: 'Servisim te gjith Telefonat Mobil etj',
      description: 'Shërbime të plota riparimi për të gjitha telefonat mobil. Nga ndryshimi i baterisë deri te problemet e softuerit, ne jemi këtu për ju.',
      image: serviceImages.battery,
      priceRange: 'Nga €25',
      repairTime: '30-90 min',
      warranty: '3-6 muaj garanci',
      included: [
        'Diagnostikim falas',
        'Pjesë origjinale',
        'Garanci 3-6 muaj',
        'Testim i plotë',
        'Mbrojtje e të dhënave'
      ],
      notIncluded: [
        'Riparime komplekse (vlerësohen veçmas)',
        'Aksesorë'
      ]
    }
  ]

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

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
            const imageData = getImageWithFallback({ image: service.image?.path, icon: '📱', alt: service.title })
            const isExpanded = expandedService === index

            return (
              <div
                key={index}
                className={`service-card ${inView ? 'animate-fadeIn' : ''} ${isExpanded ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="service-image-wrapper">
                  {imageData.type === 'image' ? (
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      fill
                      className="service-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="service-image-placeholder">
                      <Icon className="service-placeholder-icon" />
                    </div>
                  )}
                </div>

                {/* Service Icon */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* Service Content */}
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-desc">{service.description}</p>

                  {/* Quick Info */}
                  <div className="service-quick-info">
                    <div className="quick-info-item">
                      <FaClock className="quick-info-icon" />
                      <span className="quick-info-label">Kohë:</span>
                      <span className="quick-info-value">{service.repairTime}</span>
                    </div>
                    <div className="quick-info-item">
                      <span className="quick-info-label">Çmim:</span>
                      <span className="quick-info-value price">{service.priceRange}</span>
                    </div>
                    <div className="quick-info-item">
                      <FaShieldAlt className="quick-info-icon" />
                      <span className="quick-info-value warranty">{service.warranty}</span>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <button
                    className="service-expand-btn"
                    onClick={() => toggleService(index)}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Mbyll detajet' : 'Shfaq detajet'}
                  >
                    {isExpanded ? (
                      <>
                        <span>Mbyll Detajet</span>
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        <span>Shfaq Detajet</span>
                        <FaChevronDown />
                      </>
                    )}
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="service-details">
                      <div className="details-section">
                        <h4>Çfarë Përfshin:</h4>
                        <ul className="included-list">
                          {service.included.map((item, idx) => (
                            <li key={idx}>
                              <FaCheck className="check-icon" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="details-section">
                        <h4>Nuk Përfshin:</h4>
                        <ul className="not-included-list">
                          {service.notIncluded.map((item, idx) => (
                            <li key={idx}>
                              <FaTimes className="times-icon" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/contact#booking" className="btn btn-primary btn-sm service-book-btn">
                        Rezervo Tani →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
