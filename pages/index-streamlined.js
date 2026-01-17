import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import StructuredData from '@/components/StructuredData'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'

// Lazy load components below the fold
const SocialProof = dynamic(() => import('@/components/SocialProof'))
const ReviewsRatings = dynamic(() => import('@/components/ReviewsRatings'))
const Gallery = dynamic(() => import('@/components/Gallery'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'))
const BackToTop = dynamic(() => import('@/components/BackToTop'))

/**
 * Streamlined Homepage - Reduced from 20+ sections to 8 key sections
 * Other sections moved to dedicated pages for better UX
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile Shop IGMA - Shërbime Telefonash Mobil | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Mobile Shop IGMA - Shërbime profesionale për telefonat mobil në Mitrovicë, Kosovë. Shitje telefonash, riparime, ndërrim ekranesh dhe shërbime dekodimi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="riparim telefonash, dekodim telefonash, ndryshim ekrani, Mitrovicë, Kosovë, mobile shop, IGMA" />
        <meta name="author" content="Mobile Shop IGMA" />
        <link rel="canonical" href="https://igmaunlock.com" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igmaunlock.com" />
        <meta property="og:title" content="Mobile Shop IGMA - Shërbime Telefonash Mobil" />
        <meta property="og:description" content="Shërbime profesionale për telefonat mobil në Mitrovicë, Kosovë. Shitje, riparime, ndërrim ekranesh dhe shërbime dekodimi." />
        <meta property="og:image" content="https://igmaunlock.com/logo.jpg" />
        <meta property="og:locale" content="sq_AL" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://igmaunlock.com" />
        <meta name="twitter:title" content="Mobile Shop IGMA - Shërbime Telefonash Mobil" />
        <meta name="twitter:description" content="Shërbime profesionale për telefonat mobil në Mitrovicë, Kosovë." />
        <meta name="twitter:image" content="https://igmaunlock.com/logo.jpg" />
      </Head>
      <StructuredData />

      <Navbar />
      <main id="main-content">
        {/* 1. Hero Section - First Impression */}
        <Hero />

        {/* 2. Services - Core Offering */}
        <Services />

        {/* 3. Benefits - Why Choose Us */}
        <Benefits />

        {/* 4. Quick Navigation Links */}
        <section className="quick-links">
          <div className="container">
            <div className="section-header">
              <h2>Shfletoni Faqen Tonë</h2>
              <p>Gjeni informacionin që kërkoni</p>
            </div>
            <div className="quick-links-grid">
              <Link href="/services" className="quick-link-card">
                <div className="quick-link-icon">🔧</div>
                <h3>Shërbimet Tona</h3>
                <p>Shikoni të gjitha shërbimet që ofrojmë</p>
                <span className="quick-link-arrow">→</span>
              </Link>
              <Link href="/about" className="quick-link-card">
                <div className="quick-link-icon">ℹ️</div>
                <h3>Rreth Nesh</h3>
                <p>Mësoni më shumë rreth kompanisë sonë</p>
                <span className="quick-link-arrow">→</span>
              </Link>
              <Link href="/gallery" className="quick-link-card">
                <div className="quick-link-icon">📸</div>
                <h3>Galeria</h3>
                <p>Shikoni punët dhe riparimet tona</p>
                <span className="quick-link-arrow">→</span>
              </Link>
              <Link href="/contact" className="quick-link-card">
                <div className="quick-link-icon">📞</div>
                <h3>Kontakt</h3>
                <p>Na kontaktoni për çdo pyetje</p>
                <span className="quick-link-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Social Proof - Trust Building */}
        <SocialProof />

        {/* 6. Featured Gallery - Show Recent Work */}
        <section className="featured-gallery">
          <div className="container">
            <div className="section-header">
              <h2>Punët Tona</h2>
              <p>Shikoni disa nga riparimet tona më të fundit</p>
            </div>
            <Gallery />
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link href="/gallery" className="btn btn-primary">
                Shikoni Të Gjithë Galerinë →
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Reviews & Ratings - Social Proof */}
        <ReviewsRatings />

        {/* 8. Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Gati për të Filluar?</h2>
              <p>Kontaktoni ne sot për një konsultim falas ose rezervoni një termin</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Na Kontaktoni
                </Link>
                <Link href="/contact#booking" className="btn btn-secondary btn-lg">
                  Rezervo Termin
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Contact Section - Minimal */}
        <Contact />

        {/* 10. Footer */}
        <Footer />

        {/* Floating Elements */}
        <FloatingWhatsApp />
        <BackToTop />
      </main>
    </>
  )
}
