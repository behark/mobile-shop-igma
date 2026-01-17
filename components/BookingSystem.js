'use client'

import { useState } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaTools } from 'react-icons/fa'
import { sendEmailNotification, formatBookingEmail } from '@/lib/email-service'

export default function BookingSystem() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Ndryshim Ekrani',
    'Ndryshim Baterie',
    'Riparim',
    'Dekodim',
    'Diagnostikim',
    'Tjetër'
  ]

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email notification
      const emailData = formatBookingEmail(formData)
      await sendEmailNotification({
        to: 'igma2unlock@gmail.com',
        subject: emailData.subject,
        body: emailData.body,
        type: 'booking'
      })

      // Also send mailto as fallback
      const subject = encodeURIComponent(`Rezervim: ${formData.service} - ${formData.date}`)
      const body = encodeURIComponent(
        `Emri: ${formData.name}\nTelefoni: ${formData.phone}\nEmail: ${formData.email}\n\n` +
        `Shërbimi: ${formData.service}\nData: ${formData.date}\nKoha: ${formData.time}\n\n` +
        `Mesazhi: ${formData.message || 'N/A'}`
      )
      const mailtoLink = `mailto:igma2unlock@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      setSubmitted(true)
      
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Failed to send booking email:', error)
      // Still show success and use mailto fallback
      setSubmitted(true)
      const subject = encodeURIComponent(`Rezervim: ${formData.service} - ${formData.date}`)
      const body = encodeURIComponent(
        `Emri: ${formData.name}\nTelefoni: ${formData.phone}\nEmail: ${formData.email}\n\n` +
        `Shërbimi: ${formData.service}\nData: ${formData.date}\nKoha: ${formData.time}\n\n` +
        `Mesazhi: ${formData.message || 'N/A'}`
      )
      window.location.href = `mailto:igma2unlock@gmail.com?subject=${subject}&body=${body}`
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (30 days from now)
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <section id="booking" className="booking-system">
      <div className="container">
        <div className="section-header">
          <h2>Rezervoni Termin</h2>
          <p>Rezervoni një termin për riparimin e telefonit tuaj</p>
        </div>
        <div className="booking-wrapper">
          {submitted ? (
            <div className="booking-success">
              <FaCalendarAlt className="success-icon" />
              <h3>Rezervimi u Dërgua!</h3>
              <p>Do t'ju kontaktojmë së shpejti për të konfirmuar termin.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser /> Emri i Plotë
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Emri juaj"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone /> Telefoni
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="045 123 456"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> Email (Opsionale)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">
                    <FaTools /> Shërbimi
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Zgjidhni shërbimin</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">
                    <FaCalendarAlt /> Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    max={maxDateStr}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">
                    <FaClock /> Koha
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Zgjidhni kohën</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesazh (Opsionale)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Përshkruani problemin ose çfarëdo informacioni tjetër..."
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary booking-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Duke dërguar...' : 'Rezervo Termin'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
