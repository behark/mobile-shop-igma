'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Sa kohë zgjat riparimi i një telefoni?',
      answer: 'Koha e riparimit varet nga problemi. Ndryshimi i ekranit zakonisht zgjat 30-60 minuta, ndërsa riparime më komplekse mund të zgjasin deri në 2-3 ditë. Ne gjithmonë informojmë klientët për kohën e vlerësuar para fillimit të punës.'
    },
    {
      question: 'A ofroni garanci për riparimet?',
      answer: 'Po, ofrojmë garanci 3 muaj për të gjitha riparimet dhe pjesët e zëvendësuara. Nëse ka ndonjë problem brenda kësaj periudhe, ne e riparojmë falas.'
    },
    {
      question: 'A mund të çlironi telefonin tim nga çdo operator?',
      answer: 'Po, ofrojmë shërbime dekodimi për shumicën e operatorëve. Kontaktoni me ne me modelin dhe operatorin e telefonit tuaj për të konfirmuar nëse mund ta çlirojmë.'
    },
    {
      question: 'A keni pjesë zëvendësuese origjinale?',
      answer: 'Po, përdorim pjesë origjinale dhe me cilësi të lartë për të gjitha riparimet. Ne garantojmë cilësinë e pjesëve që përdorim.'
    },
    {
      question: 'A pranoni pagesa me kartë?',
      answer: 'Po, pranojmë pagesa me kartë, para dhe transferim bankar. Ne jemi fleksibël me metodat e pagesës për lehtësinë tuaj.'
    }
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Pyetje të Shpeshta</h2>
          <p>Gjeni përgjigjet për pyetjet më të shpeshta</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
                aria-expanded={openIndex === index}
              >
                <h3>{item.question}</h3>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
