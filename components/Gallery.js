'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import ImageLightbox from './ImageLightbox'
import { galleryImages, getImageWithFallback } from '@/lib/image-config'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Use images from config - will use real images if available, icons as fallback
  const galleryItems = galleryImages.map(item => ({
    ...item,
    imageData: getImageWithFallback(item)
  }))

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Punët Tona</h2>
          <p>Shikoni disa nga riparimet tona më të fundit</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              className={`gallery-item ${inView ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setLightboxIndex(index)
                setSelectedImage(item)
              }}
              aria-label={`Shfaq ${item.title}`}
            >
              <div className="gallery-image">
                {item.imageData.type === 'image' ? (
                  <Image
                    src={item.imageData.src}
                    alt={item.imageData.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div 
                  className="gallery-placeholder"
                  style={{ display: item.imageData.type === 'icon' ? 'flex' : 'none' }}
                >
                  {item.imageData.icon}
                </div>
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </button>
          ))}
        </div>
        {selectedImage && (
          <ImageLightbox
            images={galleryItems}
            initialIndex={lightboxIndex}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  )
}
