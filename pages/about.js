import Head from 'next/head'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import SocialProof from '@/components/SocialProof'
import ServiceProcess from '@/components/ServiceProcess'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Rreth Nesh - Mobile Shop IGMA | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Mësoni më shumë rreth Mobile Shop IGMA - qendra juaj e besuar për riparime telefonash mobil në Mitrovicë, Kosovë."
        />
      </Head>

      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Rreth Mobile Shop IGMA</h1>
            <p className="page-subtitle">
              Qendra juaj e besuar për shërbime telefonash mobil me vite përvojë
            </p>
          </div>
        </section>
        <About />
        <SocialProof />
        <ServiceProcess />
        <Testimonials />
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Gati për të Riparuar Telefonin Tuaj?</h2>
              <p>Kontaktoni sot për një vlerësim falas dhe merrni ofertën tuaj personale.</p>
              <Link href="/contact" className="btn btn-primary">
                Kontaktoni Tani
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
