import { useState } from 'react'
import { sendEmailNotification, formatContactEmail } from '@/lib/email-service'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email notification
      const emailData = formatContactEmail(formData)
      await sendEmailNotification({
        to: 'igma2unlock@gmail.com',
        subject: emailData.subject,
        body: emailData.body,
        type: 'contact'
      })

      // Also send mailto as fallback
      const subject = encodeURIComponent(`Kontakt nga ${formData.name}`)
      const body = encodeURIComponent(
        `Emri: ${formData.name}\nEmail: ${formData.email}\nTelefoni: ${formData.phone}\n\nMesazhi:\n${formData.message}`
      )
      const mailtoLink = `mailto:igma2unlock@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
      
      // Fallback to mailto
      const subject = encodeURIComponent(`Kontakt nga ${formData.name}`)
      const body = encodeURIComponent(
        `Emri: ${formData.name}\nEmail: ${formData.email}\nTelefoni: ${formData.phone}\n\nMesazhi:\n${formData.message}`
      )
      window.location.href = `mailto:igma2unlock@gmail.com?subject=${subject}&body=${body}`
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adresa',
      content: 'Rr. Mbrëtresha Teutë<br />Mitrovicë, Kosovë'
    },
    {
      icon: '📞',
      title: 'Telefoni',
      content: '045 444 244',
      link: 'tel:+38345444244'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'igma2unlock@gmail.com',
      link: 'mailto:igma2unlock@gmail.com'
    },
    {
      icon: '🌐',
      title: 'Faqja Web',
      content: 'igmaunlock.com',
      link: 'https://igmaunlock.com',
      external: true
    },
    {
      icon: '📘',
      title: 'Facebook',
      content: 'Mobile Shop IGMA',
      link: 'https://www.facebook.com/igma2/',
      external: true
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Na Kontaktoni</h2>
          <p>Na vizitoni ose na kontaktoni për çdo pyetje</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <p>
                      <a 
                        href={item.link} 
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    </p>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Emri Juaj"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email-i Juaj"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Telefoni Juaj"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Mesazhi Juaj"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {submitStatus === 'success' && (
                <div className="form-success">
                  <p>✓ Faleminderit për mesazhin tuaj! Do t'ju përgjigjemi së shpejti.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-error">
                  <p>⚠ Ka ndodhur një gabim. Ju lutem provoni përsëri ose na kontaktoni direkt.</p>
                </div>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Duke dërguar...' : 'Dërgo Mesazhin'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
