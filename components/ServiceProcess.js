'use client'

import { useInView } from 'react-intersection-observer'

export default function ServiceProcess() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '1',
      title: 'Kontaktoni Ne',
      description: 'Na telefononi, na shkruani në WhatsApp, ose na vizitoni në dyqan.',
      icon: '📞'
    },
    {
      number: '2',
      title: 'Diagnostikim',
      description: 'Ekspertët tanë diagnostikojnë problemin dhe ju japin një vlerësim të saktë.',
      icon: '🔍'
    },
    {
      number: '3',
      title: 'Aprovo Riparimin',
      description: 'Ju miratoni çmimin dhe ne fillojmë riparimin menjëherë.',
      icon: '✅'
    },
    {
      number: '4',
      title: 'Riparim i Shpejtë',
      description: 'Riparojmë telefonin tuaj me pjesë origjinale dhe me kujdes maksimal.',
      icon: '🔧'
    },
    {
      number: '5',
      title: 'Testim dhe Garanci',
      description: 'Testojmë telefonin dhe ju japim garanci 3-6 muaj për riparimin.',
      icon: '🛡️'
    }
  ]

  return (
    <section id="process" className="service-process" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Si Funksionon?</h2>
          <p>Procesi ynë i thjeshtë dhe i shpejtë për riparimin e telefonit tuaj</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step ${inView ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
