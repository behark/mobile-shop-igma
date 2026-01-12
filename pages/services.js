import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Shërbimet - Mobile Shop IGMA | Mitrovicë, Kosovë</title>
        <meta
          name="description"
          content="Shërbime profesionale për telefonat mobil: riparime, ndryshim ekranesh, dekodim, shitje telefonash. Garanci 100% dhe çmime konkurruese."
        />
      </Head>

      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Benefits />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
