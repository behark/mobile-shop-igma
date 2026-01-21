import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes, FaPhone, FaWhatsapp, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa'

export default function PhoneDetailsModal({ phone, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (phone) {
      // Main image + additional images from imageGallery
      const phoneImages = [
        phone.image,
        ...(phone.imageGallery || []) // Add more images from imageGallery array
      ].filter(Boolean)
      setImages(phoneImages)
    }
  }, [phone])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !phone) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const whatsappMessage = encodeURIComponent(
    `Përshëndetje! Jam i interesuar për ${phone.brand} ${phone.model} (${phone.storage}). Çmimi: €${phone.price}`
  )

  return (
    <div className="phone-modal-overlay" onClick={onClose}>
      <div className="phone-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="phone-modal-close"
          onClick={onClose}
          aria-label="Mbyll"
        >
          <FaTimes />
        </button>

        <div className="phone-modal-body">
          {/* Left Side - Images */}
          <div className="phone-modal-images">
            {/* Main Image */}
            <div className="phone-modal-main-image">
              {images.length > 0 ? (
                <>
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${phone.brand} ${phone.model}`}
                    fill
                    className="phone-modal-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="phone-modal-image-placeholder" style={{ display: 'none' }}>
                    <span className="phone-modal-placeholder-icon">📱</span>
                  </div>

                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        className="phone-modal-nav phone-modal-nav-prev"
                        onClick={prevImage}
                        aria-label="Imazhi i mëparshëm"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="phone-modal-nav phone-modal-nav-next"
                        onClick={nextImage}
                        aria-label="Imazhi tjetër"
                      >
                        <FaChevronRight />
                      </button>
                      <div className="phone-modal-image-counter">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="phone-modal-image-placeholder">
                  <span className="phone-modal-placeholder-icon">📱</span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery (if multiple images) */}
            {images.length > 1 && (
              <div className="phone-modal-thumbnails">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`phone-modal-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={img}
                      alt={`${phone.brand} ${phone.model} - View ${index + 1}`}
                      fill
                      className="phone-modal-thumbnail-image"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Details */}
          <div className="phone-modal-details">
            {/* Header */}
            <div className="phone-modal-header">
              <div className="phone-modal-brand">{phone.brand}</div>
              <h2 className="phone-modal-title">{phone.model}</h2>

              {/* Price */}
              <div className="phone-modal-price-section">
                <span className="phone-modal-price">€{phone.price}</span>
                {phone.originalPrice && (
                  <span className="phone-modal-price-original">€{phone.originalPrice}</span>
                )}
                {phone.originalPrice && (
                  <span className="phone-modal-discount">
                    -{Math.round((1 - phone.price / phone.originalPrice) * 100)}% Zbritje
                  </span>
                )}
              </div>

              {/* Availability */}
              <div className={`phone-modal-availability ${phone.availability.toLowerCase().replace(' ', '-')}`}>
                {phone.availability}
              </div>
            </div>

            {/* Full Specifications */}
            <div className="phone-modal-specs">
              <h3>Specifikimet e Plota</h3>
              <div className="phone-modal-specs-grid">
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Memoria:</span>
                  <span className="spec-value">{phone.storage}</span>
                </div>
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Ekrani:</span>
                  <span className="spec-value">{phone.specs.screen}</span>
                </div>
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Kamera:</span>
                  <span className="spec-value">{phone.specs.camera}</span>
                </div>
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Bateria:</span>
                  <span className="spec-value">{phone.specs.battery}</span>
                </div>
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Procesori:</span>
                  <span className="spec-value">{phone.specs.processor}</span>
                </div>
                <div className="phone-modal-spec-item">
                  <span className="spec-label">Gjendja:</span>
                  <span className="spec-value">{phone.condition}</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="phone-modal-colors">
              <h3>Ngjyrat e Disponueshme</h3>
              <div className="phone-modal-colors-list">
                {phone.colors.map((color, index) => (
                  <div key={index} className="phone-modal-color-item">
                    <FaCheck className="color-check-icon" />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {phone.description && (
              <div className="phone-modal-description">
                <h3>Përshkrimi</h3>
                <p>{phone.description}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="phone-modal-actions">
              <Link
                href={`/contact?phone=${encodeURIComponent(`${phone.brand} ${phone.model}`)}`}
                className="btn btn-primary phone-modal-action-btn"
                onClick={onClose}
              >
                <FaPhone /> Kontakto për Këtë Telefon
              </Link>
              <Link
                href={`/contact#booking?phone=${encodeURIComponent(`${phone.brand} ${phone.model}`)}`}
                className="btn btn-secondary phone-modal-action-btn"
                onClick={onClose}
              >
                Rezervo Këtë Telefon
              </Link>
              <a
                href={`https://wa.me/38345444244?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp phone-modal-action-btn"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
