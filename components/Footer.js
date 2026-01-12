import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from './SocialMedia'

export default function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link href="/" className="footer-logo-link">
              <Image 
                src="/logo.jpg" 
                alt="IGMA Mobile Shop Logo" 
                width={150} 
                height={50}
                className="footer-logo"
              />
            </Link>
            <p>Qendra juaj e besuar për shërbime telefonash mobil në Mitrovicë, Kosovë.</p>
            <SocialMedia />
          </div>
          <div className="footer-section">
            <h4>Lidhje të Shpejta</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                  Shtëpia
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>
                  Shërbimet
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, '#products')}>
                  Produktet
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
                  Rreth Nesh
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>📍 Rr. Mbrëtresha Teutë, Mitrovicë</p>
            <p>
              📞 <a href="tel:+38345444244">045 444 244</a>
            </p>
            <p>
              ✉️ <a href="mailto:igma2unlock@gmail.com">igma2unlock@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Mobile Shop IGMA. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  )
}
