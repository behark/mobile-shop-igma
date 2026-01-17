'use client'

import Head from 'next/head'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { phones, brands, conditions, storageOptions, priceRanges } from '@/lib/phones-data'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaFilter, FaTimes } from 'react-icons/fa'
import PhoneDetailsModal from '@/components/PhoneDetailsModal'

export default function PhonesPage() {
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedCondition, setSelectedCondition] = useState('All')
  const [selectedStorage, setSelectedStorage] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPhone, setSelectedPhone] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter phones based on selected criteria
  const filteredPhones = useMemo(() => {
    return phones.filter(phone => {
      // Brand filter
      if (selectedBrand !== 'All' && phone.brand !== selectedBrand) {
        return false
      }

      // Condition filter
      if (selectedCondition !== 'All' && phone.condition !== selectedCondition) {
        return false
      }

      // Storage filter
      if (selectedStorage !== 'All' && phone.storage !== selectedStorage) {
        return false
      }

      // Price range filter
      if (selectedPriceRange !== 'All') {
        const range = priceRanges.find(r => r.label === selectedPriceRange)
        if (range && (phone.price < range.min || phone.price > range.max)) {
          return false
        }
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const searchText = `${phone.brand} ${phone.model} ${phone.storage} ${phone.colors.join(' ')}`.toLowerCase()
        if (!searchText.includes(query)) {
          return false
        }
      }

      return true
    })
  }, [selectedBrand, selectedCondition, selectedStorage, selectedPriceRange, searchQuery])

  // Count active filters
  const activeFiltersCount = [
    selectedBrand !== 'All',
    selectedCondition !== 'All',
    selectedStorage !== 'All',
    selectedPriceRange !== 'All',
    searchQuery !== ''
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedBrand('All')
    setSelectedCondition('All')
    setSelectedStorage('All')
    setSelectedPriceRange('All')
    setSearchQuery('')
  }

  const whatsappMessage = (phone) => {
    return encodeURIComponent(`Përshëndetje! Jam i interesuar për ${phone.brand} ${phone.model} (${phone.storage}). Çmimi: €${phone.price}`)
  }

  return (
    <>
      <Head>
        <title>Telefonat në Shitje - Mobile Shop IGMA | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Zgjidhni nga 25+ modele telefonash mobil: iPhone, Samsung, Xiaomi, Google Pixel dhe më shumë. Çmime konkurruese dhe garanci 100%."
        />
        <meta name="keywords" content="telefonat mobil, iPhone, Samsung, Xiaomi, shitje telefonash, Mitrovicë" />
      </Head>

      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Telefonat në Shitje</h1>
            <p className="page-subtitle">
              Zgjidhni telefonin tuaj të ri nga 25+ modele premium
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="phones-filters-section">
          <div className="container">
            {/* Search Bar */}
            <div className="phones-search">
              <input
                type="text"
                placeholder="Kërko telefonat... (model, markë, ngjyrë)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="phones-search-input"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
              aria-label="Shfaq/Fshih filtrat"
            >
              <FaFilter />
              <span>Filtrat</span>
              {activeFiltersCount > 0 && (
                <span className="filter-badge">{activeFiltersCount}</span>
              )}
            </button>

            {/* Filters Panel */}
            <div className={`phones-filters ${showFilters ? 'active' : ''}`}>
              <div className="filters-header">
                <h3>Filtro Telefonat</h3>
                {activeFiltersCount > 0 && (
                  <button onClick={clearFilters} className="clear-filters-btn">
                    <FaTimes /> Fshi Filtret
                  </button>
                )}
              </div>

              <div className="filters-grid">
                {/* Brand Filter */}
                <div className="filter-group">
                  <label>Marka</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="filter-select"
                  >
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Condition Filter */}
                <div className="filter-group">
                  <label>Gjendja</label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="filter-select"
                  >
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                </div>

                {/* Storage Filter */}
                <div className="filter-group">
                  <label>Memoria</label>
                  <select
                    value={selectedStorage}
                    onChange={(e) => setSelectedStorage(e.target.value)}
                    className="filter-select"
                  >
                    {storageOptions.map(storage => (
                      <option key={storage} value={storage}>{storage}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="filter-group">
                  <label>Çmimi</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="filter-select"
                  >
                    {priceRanges.map(range => (
                      <option key={range.label} value={range.label}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="results-count">
              <p>
                {filteredPhones.length === phones.length ? (
                  <>Gjithsej <strong>{phones.length}</strong> telefonat</>
                ) : (
                  <>
                    Gjetur <strong>{filteredPhones.length}</strong> nga <strong>{phones.length}</strong> telefonat
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Phones Grid */}
        <section className="phones-inventory">
          <div className="container">
            {filteredPhones.length > 0 ? (
              <div className="phones-grid">
                {filteredPhones.map(phone => (
                  <div 
                    key={phone.id} 
                    className="phone-card"
                    onClick={() => {
                      setSelectedPhone(phone)
                      setIsModalOpen(true)
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedPhone(phone)
                        setIsModalOpen(true)
                      }
                    }}
                    aria-label={`Shfaq detajet për ${phone.brand} ${phone.model}`}
                  >
                    {/* Sale Badge */}
                    {phone.originalPrice && (
                      <div className="phone-sale-badge">-{Math.round((1 - phone.price / phone.originalPrice) * 100)}%</div>
                    )}

                    {/* Availability Badge */}
                    <div className={`phone-availability ${phone.availability.toLowerCase().replace(' ', '-')}`}>
                      {phone.availability}
                    </div>

                    {/* Phone Image */}
                    <div className="phone-image-wrapper">
                      <Image
                        src={phone.image}
                        alt={`${phone.brand} ${phone.model}`}
                        fill
                        className="phone-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="phone-image-placeholder" style={{ display: 'none' }}>
                        <span className="phone-placeholder-icon">📱</span>
                      </div>
                    </div>

                    {/* Phone Info */}
                    <div className="phone-info">
                      <div className="phone-brand">{phone.brand}</div>
                      <h3 className="phone-model">{phone.model}</h3>
                      
                      {/* Price */}
                      <div className="phone-price">
                        <span className="price-current">€{phone.price}</span>
                        {phone.originalPrice && (
                          <span className="price-original">€{phone.originalPrice}</span>
                        )}
                      </div>

                      {/* Key Specs */}
                      <div className="phone-specs">
                        <div className="spec-item">
                          <span className="spec-label">Memoria:</span>
                          <span className="spec-value">{phone.storage}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">Ekrani:</span>
                          <span className="spec-value">{phone.specs.screen}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">Kamera:</span>
                          <span className="spec-value">{phone.specs.camera}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">Gjendja:</span>
                          <span className="spec-value">{phone.condition}</span>
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="phone-colors">
                        <span className="colors-label">Ngjyrat:</span>
                        <div className="colors-list">
                          {phone.colors.slice(0, 3).map((color, idx) => (
                            <span key={idx} className="color-chip">{color}</span>
                          ))}
                          {phone.colors.length > 3 && (
                            <span className="color-more">+{phone.colors.length - 3}</span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="phone-actions" onClick={(e) => e.stopPropagation()}>
                        <Link
                          href={`/contact?phone=${encodeURIComponent(`${phone.brand} ${phone.model}`)}`}
                          className="btn btn-primary btn-sm phone-action-btn"
                        >
                          <FaPhone /> Kontakto
                        </Link>
                        <Link
                          href={`/contact#booking?phone=${encodeURIComponent(`${phone.brand} ${phone.model}`)}`}
                          className="btn btn-secondary btn-sm phone-action-btn"
                        >
                          Rezervo
                        </Link>
                        <a
                          href={`https://wa.me/38345444244?text=${whatsappMessage(phone)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm phone-action-btn"
                        >
                          <FaWhatsapp /> WhatsApp
                        </a>
                      </div>
                      
                      {/* View Details Hint */}
                      <div className="phone-view-details">
                        Kliko për më shumë detaje →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">📱</div>
                <h3>Nuk u gjet asnjë telefon</h3>
                <p>Provoni të ndryshoni filtrat ose kërkimin tuaj.</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Fshi Të Gjitha Filtret
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="phones-cta">
          <div className="container">
            <div className="phones-cta-content">
              <h2>Nuk e Gjetët Ato që Kërkoni?</h2>
              <p>Na kontaktoni dhe ne do t'ju gjejmë telefonin e përsosur për ju!</p>
              <div className="phones-cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Na Kontaktoni
                </Link>
                <a
                  href="https://wa.me/38345444244?text=Përshëndetje! Jam duke kërkuar për një telefon specifik."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      
      {/* Phone Details Modal */}
      <PhoneDetailsModal
        phone={selectedPhone}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedPhone(null)
        }}
      />
    </>
  )
}
