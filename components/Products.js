export default function Products() {
  const products = [
    {
      icon: '📱',
      title: 'Telefonat Mobil',
      description: 'Smartphone-at më të fundit nga markat më të mira'
    },
    {
      icon: '📱',
      title: 'Kutitë për Telefona',
      description: 'Kutitë premium duke përfshirë marka dizajneri',
      price: 'Duke filluar nga 10€'
    },
    {
      icon: '🔋',
      title: 'Aksesorë',
      description: 'Karikues, kabllo dhe më shumë'
    },
    {
      icon: '🛡️',
      title: 'Mbrojtës Ekrani',
      description: 'Mbrojeni ekranin e pajisjes suaj'
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
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {product.price && <p className="product-price">{product.price}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
