import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

// Lazy load components
const Pricing = dynamic(() => import('@/components/Pricing'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const QuoteCalculator = dynamic(() => import('@/components/QuoteCalculator'))
const RepairTracking = dynamic(() => import('@/components/RepairTracking'))
const ServiceProcess = dynamic(() => import('@/components/ServiceProcess'))

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
      <main style={{ paddingTop: '80px' }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Shërbimet Tona</h1>
            <p className="page-subtitle">
              Zgjidhje të plota për telefonat mobil për të gjitha nevojat tuaja
            </p>
          </div>
        </section>
        
        <Services />
        <Benefits />
        <ServiceProcess />
        <QuoteCalculator />
        <RepairTracking />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
