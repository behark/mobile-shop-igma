'use client'

import { useState, useEffect } from 'react'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function OpeningHoursWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  const hours = [
    { day: 'E Hënë', time: '09:00 - 18:00', open: true },
    { day: 'E Martë', time: '09:00 - 18:00', open: true },
    { day: 'E Mërkurë', time: '09:00 - 18:00', open: true },
    { day: 'E Enjte', time: '09:00 - 18:00', open: true },
    { day: 'E Premte', time: '09:00 - 18:00', open: true },
    { day: 'E Shtunë', time: '10:00 - 16:00', open: true },
    { day: 'E Dielë', time: 'Mbyllur', open: false }
  ]

  const getCurrentDay = () => {
    const days = ['E Dielë', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë']
    return days[new Date().getDay()]
  }

  const checkIfOpen = () => {
    const now = new Date()
    const day = now.getDay()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTimeMinutes = currentHour * 60 + currentMinute

    if (day === 0) return false // Sunday closed
    if (day === 6) { // Saturday
      return currentTimeMinutes >= 10 * 60 && currentTimeMinutes < 16 * 60
    }
    // Monday-Friday
    return currentTimeMinutes >= 9 * 60 && currentTimeMinutes < 18 * 60
  }

  useEffect(() => {
    setIsOpen(checkIfOpen())
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const currentDay = getCurrentDay()
  const todayHours = hours.find(h => h.day === currentDay)

  return (
    <div className="opening-hours-widget">
      <div className="widget-header">
        <FaClock className="widget-icon" />
        <div className="widget-info">
          <div className="widget-status">
            <span className={`status-indicator ${isOpen ? 'open' : 'closed'}`}></span>
            <span className="status-text">{isOpen ? 'Hapur Tani' : 'Mbyllur'}</span>
          </div>
          <div className="widget-time">
            {todayHours?.open ? (
              <span>Sot: {todayHours.time}</span>
            ) : (
              <span>Sot: Mbyllur</span>
            )}
          </div>
        </div>
      </div>
      <Link href="/contact#hours" className="widget-link">
        Shiko Orarin e Plotë →
      </Link>
    </div>
  )
}
