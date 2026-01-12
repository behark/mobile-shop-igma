import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Products from '@/components/Products'
import SocialProof from '@/components/SocialProof'
import About from '@/components/About'
import ServiceProcess from '@/components/ServiceProcess'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import OpeningHours from '@/components/OpeningHours'
import GoogleMaps from '@/components/GoogleMaps'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import QuoteCalculator from '@/components/QuoteCalculator'
import BookingSystem from '@/components/BookingSystem'
import OnlineStore from '@/components/OnlineStore'
import RepairTracking from '@/components/RepairTracking'
import Newsletter from '@/components/Newsletter'
import LiveChat from '@/components/LiveChat'
import BackToTop from '@/components/BackToTop'

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
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
      <Testimonials />
      <Pricing />
      <FAQ />
      <OpeningHours />
      <GoogleMaps />
      <Contact />
      <Newsletter />
      <Footer />
      <FloatingWhatsApp />
      <LiveChat />
      <BackToTop />
    </>
  )
}
