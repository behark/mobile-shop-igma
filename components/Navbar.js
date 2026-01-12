import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Handle smooth scroll for homepage sections, or navigate to pages
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    
    // If we're on homepage and it's an anchor link, smooth scroll
    if (router.pathname === '/' && href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to page
      router.push(href)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo-link">
            <div className="logo">
              <Image 
                src="/logo.jpg" 
                alt="IGMA Mobile Shop Logo" 
                width={120} 
                height={40}
                className="logo-image"
                priority
              />
              <span className="logo-text">IGMA Mobile Shop</span>
            </div>
          </Link>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Shtëpia
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link" onClick={closeMenu}>
                Shërbimet
              </Link>
            </li>
            <li>
              <a href="#products" className="nav-link" onClick={(e) => handleLinkClick(e, '#products')}>
                Produktet
              </a>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={closeMenu}>
                Rreth Nesh
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="nav-link" onClick={closeMenu}>
                Galeria
              </Link>
            </li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
