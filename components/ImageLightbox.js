'use client'

import { useState, useEffect } from 'react'

export default function ImageLightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className="image-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria e imazheve"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="lightbox-close"
        aria-label="Mbyll galerinë"
      >
        ×
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="lightbox-nav lightbox-prev"
          aria-label="Imazhi i mëparshëm"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImage.image ? (
          <img
            src={currentImage.image}
            alt={currentImage.title || currentImage.alt || 'Imazh galerie'}
            className="lightbox-image"
          />
        ) : (
          <div className="lightbox-placeholder">
            <div className="lightbox-placeholder-icon">{currentImage.icon || '📱'}</div>
          </div>
        )}
        {(currentImage.title || currentImage.category) && (
          <div className="lightbox-info">
            {currentImage.title && <h3>{currentImage.title}</h3>}
            {currentImage.category && <p>{currentImage.category}</p>}
          </div>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="lightbox-nav lightbox-next"
          aria-label="Imazhi tjetër"
        >
          ›
        </button>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && images.length <= 10 && (
        <div className="lightbox-thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={`lightbox-thumbnail ${
                index === currentIndex ? 'active' : ''
              }`}
              aria-label={`Shfaq imazhin ${index + 1}`}
            >
              {img.image ? (
                <img src={img.image} alt={img.title || ''} />
              ) : (
                <div className="thumbnail-placeholder">{img.icon || '📱'}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
