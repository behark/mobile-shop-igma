import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import StructuredData from '@/components/StructuredData'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'

// Lazy load components below the fold for better performance
const Products = dynamic(() => import('@/components/Products'), {
  loading: () => <div className="component-loading">Duke ngarkuar...</div>
})
const SocialProof = dynamic(() => import('@/components/SocialProof'))
const About = dynamic(() => import('@/components/About'))
const ServiceProcess = dynamic(() => import('@/components/ServiceProcess'))
const Gallery = dynamic(() => import('@/components/Gallery'))
const ReviewsRatings = dynamic(() => import('@/components/ReviewsRatings'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const OpeningHours = dynamic(() => import('@/components/OpeningHours'))
const GoogleMaps = dynamic(() => import('@/components/GoogleMaps'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'))
const QuoteCalculator = dynamic(() => import('@/components/QuoteCalculator'))
const BookingSystem = dynamic(() => import('@/components/BookingSystem'))
const OnlineStore = dynamic(() => import('@/components/OnlineStore'))
const RepairTracking = dynamic(() => import('@/components/RepairTracking'))
const Newsletter = dynamic(() => import('@/components/Newsletter'))
const LiveChat = dynamic(() => import('@/components/LiveChat'), {
  ssr: false // Live chat doesn't need SSR
})
const BackToTop = dynamic(() => import('@/components/BackToTop'))

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
      <Hero />
      <Services />
      <Benefits />
      <QuoteCalculator />
      <Products />
      <OnlineStore />
      <SocialProof />
      <section className="quick-links">
        <div className="container">
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
      <RepairTracking />
      <BookingSystem />
      <About />
      <ServiceProcess />
      <Gallery />
      <ReviewsRatings />
      <Pricing />
      <FAQ />
      <OpeningHours />
      <GoogleMaps />
      <Contact />
      <Newsletter />
      <Footer />
      <FloatingWhatsApp />
      {/* LiveChat component - can be removed if using Tawk.to exclusively */}
      {/* <LiveChat /> */}
      <BackToTop />
      </main>
    </>
  )
}
