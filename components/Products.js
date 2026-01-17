import Image from 'next/image'
import { productImages, getImageWithFallback } from '@/lib/image-config'

export default function Products() {
  const products = [
    {
      id: 1,
      icon: '📱',
      title: 'Telefonat Mobil',
      description: 'Smartphone-at më të fundit nga markat më të mira',
      image: productImages.phones
    },
    {
      id: 2,
      icon: '📱',
      title: 'Kutitë për Telefona',
      description: 'Kutitë premium duke përfshirë marka dizajneri',
      price: 'Duke filluar nga 10€',
      image: productImages.cases
    },
    {
      id: 3,
      icon: '🔋',
      title: 'Aksesorë',
      description: 'Karikues, kabllo dhe më shumë',
      image: productImages.accessories
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Mbrojtës Ekrani',
      description: 'Mbrojeni ekranin e pajisjes suaj',
      image: productImages.screenProtectors
    }
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Produktet Tona</h2>
          <p>Aksesorë dhe pajisje me cilësi në çmime konkurruese</p>
        </div>
        <div className="products-grid">
          {products.map((product) => {
            const imageData = getImageWithFallback({
              image: product.image?.path,
              icon: product.icon,
              alt: product.title
            })
            
            return (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {imageData.type === 'image' ? (
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div 
                    className="product-icon"
                    style={{ display: imageData.type === 'icon' ? 'flex' : 'none' }}
                  >
                    {imageData.icon}
                  </div>
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.price && <p className="product-price">{product.price}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
