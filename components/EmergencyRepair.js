'use client'

import { FaPhone, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa'

export default function EmergencyRepair() {
  const phoneNumber = '+38345444244'
  const whatsappNumber = '38345444244'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Përshëndetje! Kam nevojë për riparim urgjent.`

  return (
    <section className="emergency-repair">
      <div className="container">
        <div className="emergency-content">
          <div className="emergency-icon">
            <FaExclamationTriangle />
          </div>
          <div className="emergency-info">
            <h2>Riparim Urgjent?</h2>
            <p>Kontaktoni ne tani për shërbim të shpejtë dhe profesional</p>
            <div className="emergency-actions">
              <a 
                href={`tel:${phoneNumber}`}
                className="btn btn-emergency btn-lg"
              >
                <FaPhone /> Telefono: 045 444 244
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
            <p className="emergency-note">
              ⚡ Shërbim i shpejtë - Shumica e riparimeve përfundojnë brenda 30-60 minutave
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
