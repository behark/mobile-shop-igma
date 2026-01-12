export default function Hero() {
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Mobile Shop IGMA</h1>
          <p className="hero-subtitle">Qendra Juaj e Besuar për Shërbime Telefonash Mobil në Mitrovicë</p>
          <p className="hero-description">
            Shitje, riparime dhe shërbime profesionale për telefonat mobil. E riparojmë saktë, herën e parë.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#contact')}>
              Na Kontaktoni
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => handleLinkClick(e, '#services')}>
              Shërbimet Tona
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
