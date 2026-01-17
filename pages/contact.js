import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

// Lazy load components
const BookingSystem = dynamic(() => import('@/components/BookingSystem'))
const OpeningHours = dynamic(() => import('@/components/OpeningHours'))
const GoogleMaps = dynamic(() => import('@/components/GoogleMaps'))
const FAQ = dynamic(() => import('@/components/FAQ'))

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Kontakt - Mobile Shop IGMA | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Kontaktoni Mobile Shop IGMA në Mitrovicë, Kosovë. Telefoni: 045 444 244, Email: igma2unlock@gmail.com. Na vizitoni në Rr. Mbrëtresha Teutë."
        />
      </Head>

      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Na Kontaktoni</h1>
            <p className="page-subtitle">
              Jemi këtu për t'ju ndihmuar me çdo pyetje ose nevojë
            </p>
          </div>
        </section>
        
        <Contact />
        <section id="booking">
          <BookingSystem />
        </section>
        <OpeningHours />
        <GoogleMaps />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
