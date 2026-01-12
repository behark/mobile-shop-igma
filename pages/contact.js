import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import OpeningHours from '@/components/OpeningHours'
import GoogleMaps from '@/components/GoogleMaps'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

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
      <div style={{ paddingTop: '80px' }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Na Kontaktoni</h1>
            <p className="page-subtitle">
              Jemi këtu për t'ju ndihmuar me çdo pyetje ose nevojë
            </p>
          </div>
        </section>
        <Contact />
        <OpeningHours />
        <GoogleMaps />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
