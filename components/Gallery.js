'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Riparim Ekrani iPhone',
      category: 'Ndryshim Ekrani',
      icon: '📱'
    },
    {
      id: 2,
      title: 'Riparim Baterie Samsung',
      category: 'Ndryshim Baterie',
      icon: '🔋'
    },
    {
      id: 3,
      title: 'Dekodim Telefoni',
      category: 'Dekodim',
      icon: '🔓'
    },
    {
      id: 4,
      title: 'Riparim Kamere',
      category: 'Riparim',
      icon: '📷'
    },
    {
      id: 5,
      title: 'Ndryshim Xham',
      category: 'Ndryshim Xham',
      icon: '🖥️'
    },
    {
      id: 6,
      title: 'Riparim Kompleks',
      category: 'Riparim',
      icon: '🔧'
    }
  ]

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Punët Tona</h2>
          <p>Shikoni disa nga riparimet tona më të fundit</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item ${inView ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image">
                <div className="gallery-placeholder">{item.icon}</div>
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-close" onClick={() => setSelectedImage(null)}>×</button>
              <div className="gallery-modal-image">
                <div className="gallery-placeholder large">{selectedImage.icon}</div>
              </div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
