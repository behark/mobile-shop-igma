export default function OpeningHours() {
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

  const currentDay = getCurrentDay()

  return (
    <section className="opening-hours">
      <div className="container">
        <div className="hours-content">
          <h2>Orari i Hapjes</h2>
          <div className="hours-list">
            {hours.map((hour, index) => (
              <div 
                key={index} 
                className={`hours-item ${hour.day === currentDay ? 'today' : ''} ${!hour.open ? 'closed' : ''}`}
              >
                <span className="hours-day">{hour.day}</span>
                <span className="hours-time">{hour.time}</span>
                {hour.day === currentDay && <span className="hours-badge">Sot</span>}
              </div>
            ))}
          </div>
          <div className="hours-note">
            <p>📞 Për urgjenca, na kontaktoni në <a href="tel:+38345444244">045 444 244</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
