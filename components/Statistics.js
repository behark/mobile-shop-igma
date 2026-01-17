'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { FaUsers, FaMobileAlt, FaStar, FaCalendarAlt } from 'react-icons/fa'

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [counted, setCounted] = useState(false)

  const stats = [
    {
      icon: FaUsers,
      value: 500,
      suffix: '+',
      label: 'Klientë të Kënaqur',
      color: '#2563eb'
    },
    {
      icon: FaMobileAlt,
      value: 1000,
      suffix: '+',
      label: 'Telefona Riparuar',
      color: '#10b981'
    },
    {
      icon: FaStar,
      value: 98,
      suffix: '%',
      label: 'Kënaqësi Klientësh',
      color: '#f59e0b'
    },
    {
      icon: FaCalendarAlt,
      value: 5,
      suffix: '+',
      label: 'Vjet Përvojë',
      color: '#8b5cf6'
    }
  ]

  useEffect(() => {
    if (inView && !counted) {
      setCounted(true)
    }
  }, [inView, counted])

  return (
    <section ref={ref} className="statistics-section">
      <div className="container">
        <div className="section-header">
          <h2>Numrat Tanë</h2>
          <p>Rezultatet që flasin për veten</p>
        </div>
        <div className="statistics-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="statistic-card">
                <div className="statistic-icon" style={{ color: stat.color }}>
                  <Icon />
                </div>
                <div className="statistic-value">
                  {inView && counted ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="statistic-label">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Animated counter component
function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count}{suffix}</span>
}
