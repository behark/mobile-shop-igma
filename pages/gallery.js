import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Galeria - Mobile Shop IGMA | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Shikoni punët tona - riparime telefonash mobil, ndryshim ekranesh, dhe më shumë nga Mobile Shop IGMA."
        />
        <meta name="keywords" content="galeria, punët tona, riparime telefonash, ndryshim ekrani, Mobile Shop IGMA" />
        <link rel="canonical" href="https://igmaunlock.com/gallery" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igmaunlock.com/gallery" />
        <meta property="og:title" content="Galeria - Mobile Shop IGMA" />
        <meta property="og:description" content="Shikoni punët tona - riparime telefonash mobil dhe më shumë." />
        <meta property="og:image" content="https://igmaunlock.com/logo.jpg" />
        <meta property="og:locale" content="sq_AL" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Galeria - Mobile Shop IGMA" />
        <meta name="twitter:description" content="Shikoni punët tona nga Mobile Shop IGMA." />
      </Head>

      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Galeria e Punëve Tona</h1>
            <p className="page-subtitle">
              Shikoni disa nga riparimet dhe punët tona më të fundit
            </p>
          </div>
        </section>
        <Gallery />
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Dëshironi të Riparoni Telefonin Tuaj?</h2>
              <p>Kontaktoni ne sot për një vlerësim falas!</p>
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
