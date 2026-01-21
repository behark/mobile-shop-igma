import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SocialMedia from './SocialMedia'
import { handleNavigation } from '@/lib/navigation'

export default function Footer() {
  const router = useRouter()

  const onLinkClick = (e, href) => {
    handleNavigation(e, href, router)
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
                <Link href="/">Shtëpia</Link>
              </li>
              <li>
                <Link href="/services">Shërbimet</Link>
              </li>
              <li>
                <a href="#products" onClick={(e) => onLinkClick(e, '#products')}>
                  Produktet
                </a>
              </li>
              <li>
                <Link href="/about">Rreth Nesh</Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
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
