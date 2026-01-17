'use client'

import { useState } from 'react'
import { FaSearch, FaMobileAlt, FaTools, FaCheckCircle, FaClock, FaSpinner } from 'react-icons/fa'

export default function RepairTracking() {
  const [trackingId, setTrackingId] = useState('')
  const [repairStatus, setRepairStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  // Mock repair statuses - in real app, this would fetch from backend
  const mockRepairs = {
    'IGMA001': {
      id: 'IGMA001',
      phone: 'iPhone 12',
      service: 'Ndryshim Ekrani',
      status: 'completed',
      statusText: 'Përfunduar',
      submittedDate: '2025-01-10',
      completedDate: '2025-01-12',
      estimatedPrice: '50€'
    },
    'IGMA002': {
      id: 'IGMA002',
      phone: 'Samsung Galaxy S21',
      service: 'Ndryshim Baterie',
      status: 'in-progress',
      statusText: 'Në Proces',
      submittedDate: '2025-01-11',
      estimatedCompletion: '2025-01-13',
      estimatedPrice: '25€'
    },
    'IGMA003': {
      id: 'IGMA003',
      phone: 'Huawei P30',
      service: 'Riparim',
      status: 'diagnosis',
      statusText: 'Në Diagnostikim',
      submittedDate: '2025-01-12',
      estimatedPrice: '40€'
    }
  }

  const handleTrack = (e) => {
    e.preventDefault()
    if (!trackingId.trim()) return

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const repair = mockRepairs[trackingId.toUpperCase()]
      if (repair) {
        setRepairStatus(repair)
      } else {
        setRepairStatus({ error: true, message: 'ID-ja e tracking-ut nuk u gjet. Ju lutem kontrolloni ID-në.' })
      }
      setLoading(false)
    }, 1000)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />
      case 'in-progress':
        return <FaSpinner className="status-icon in-progress" />
      case 'diagnosis':
        return <FaClock className="status-icon diagnosis" />
      default:
        return <FaMobileAlt className="status-icon" />
    }
  }

  return (
    <section id="tracking" className="repair-tracking">
      <div className="container">
        <div className="section-header">
          <h2>Ndjekja e Riparimit</h2>
          <p>Shikoni statusin e riparimit tuaj me ID-në e tracking-ut</p>
        </div>
        <div className="tracking-wrapper">
          <form onSubmit={handleTrack} className="tracking-form">
            <div className="tracking-input-group">
              <FaSearch className="search-icon" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Shkruani ID-në e tracking-ut (p.sh. IGMA001)"
                className="tracking-input"
                required
                aria-label="ID-ja e tracking-ut"
                aria-describedby="tracking-help"
              />
              <span id="tracking-help" className="sr-only">Shkruani ID-në që ju është dhënë kur dorëzoni telefonin</span>
              <button type="submit" className="btn btn-primary tracking-button" disabled={loading} aria-label="Kërko statusin e riparimit">
                {loading ? 'Duke kërkuar...' : 'Ndjek'}
              </button>
            </div>
          </form>

          {repairStatus && (
            <div className={`tracking-result ${repairStatus.error ? 'error' : ''}`}>
              {repairStatus.error ? (
                <div className="error-message">
                  <p>{repairStatus.message}</p>
                  <p className="help-text">ID-ja e tracking-ut ju jepet kur dorëzoni telefonin për riparim.</p>
                </div>
              ) : (
                <>
                  <div className="status-header">
                    {getStatusIcon(repairStatus.status)}
                    <div>
                      <h3>Status: {repairStatus.statusText}</h3>
                      <p className="tracking-id">ID: {repairStatus.id}</p>
                    </div>
                  </div>
                  <div className="status-details">
                    <div className="detail-item">
                      <FaMobileAlt />
                      <div>
                        <span className="detail-label">Telefoni:</span>
                        <span className="detail-value">{repairStatus.phone}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaTools />
                      <div>
                        <span className="detail-label">Shërbimi:</span>
                        <span className="detail-value">{repairStatus.service}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Data e Dorëzimit:</span>
                      <span className="detail-value">{repairStatus.submittedDate}</span>
                    </div>
                    {repairStatus.completedDate && (
                      <div className="detail-item">
                        <span className="detail-label">Data e Përfundimit:</span>
                        <span className="detail-value">{repairStatus.completedDate}</span>
                      </div>
                    )}
                    {repairStatus.estimatedCompletion && (
                      <div className="detail-item">
                        <span className="detail-label">Vlerësuar për:</span>
                        <span className="detail-value">{repairStatus.estimatedCompletion}</span>
                      </div>
                    )}
                    <div className="detail-item price">
                      <span className="detail-label">Çmimi i Vlerësuar:</span>
                      <span className="detail-value">{repairStatus.estimatedPrice}</span>
                    </div>
                  </div>
                  <div className="status-actions">
                    <a href="/contact" className="btn btn-secondary">
                      Na Kontaktoni
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
