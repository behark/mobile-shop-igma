import { useState, useEffect, useCallback } from 'react'
import { FaShoppingCart, FaPlus, FaMinus, FaCheck } from 'react-icons/fa'

const CART_STORAGE_KEY = 'igma_cart'

export default function OnlineStore() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (err) {
      console.error('Error loading cart from localStorage:', err)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (err) {
      console.error('Error saving cart to localStorage:', err)
    }
  }, [cart])

  // Load products from API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch('/api/accessories')
        if (!res.ok) {
          throw new Error('Failed to load products')
        }
        const data = await res.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        console.error('Error loading products:', err)
        setError('Nuk mund të ngarkoheshin produktet. Provoni përsëri më vonë.')
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    setShowCart(true)
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change
        if (newQuantity <= 0) {
          return null
        }
        return { ...item, quantity: newQuantity }
      }
      return item
    }).filter(Boolean))
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <section id="store" className="online-store">
      <div className="container">
        <div className="section-header">
          <h2>Dyqani Online</h2>
          <p>Bli aksesorë dhe produkte për telefonin tuaj</p>
        </div>

        <div className="store-header">
          <button
            className="cart-toggle"
            onClick={() => setShowCart(!showCart)}
          >
            <FaShoppingCart />
            <span className="cart-count">{cart.length}</span>
            {cart.length > 0 && <span className="cart-total">{cartTotal}€</span>}
          </button>
        </div>

        <div className="store-layout">
          <div className="products-grid">
            {loading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                <p>Duke ngarkuar produktet...</p>
              </div>
            ) : error ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#c33' }}>
                <p>{error}</p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1rem' }}
                  onClick={() => window.location.reload()}
                >
                  Provo Përsëri
                </button>
              </div>
            ) : products.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                <p>Nuk ka produkte në dispozicion për momentin.</p>
              </div>
            ) : (
              products.map((product) => {
                // Check if image is a URL or base64 data URL
                const isImageUrl = product.image && (product.image.startsWith('http') || product.image.startsWith('data:image'))

                return (
                  <div key={product.id} className="product-card-store">
                    <div className="product-image-store">
                      {isImageUrl ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          onError={(e) => {
                            // Fallback to emoji if image fails to load
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div
                        className="product-placeholder"
                        style={{ display: isImageUrl ? 'none' : 'flex' }}
                      >
                        {product.image || '📱'}
                      </div>
                      {!product.inStock && (
                        <div className="out-of-stock">Jashtë Stokut</div>
                      )}
                    </div>
                    <div className="product-info-store">
                      <span className="product-category">{product.category}</span>
                      <h3>{product.name}</h3>
                      <div className="product-price-store">
                        <span>{product.price}€</span>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary add-to-cart-btn"
                        disabled={!product.inStock}
                      >
                        <FaPlus /> Shto në Shportë
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {showCart && (
            <div className="cart-sidebar">
              <div className="cart-header">
                <h3>Shporta ({cart.length})</h3>
                <button onClick={() => setShowCart(false)} className="cart-close">×</button>
              </div>
              <div className="cart-items">
                {cart.length === 0 ? (
                  <p className="empty-cart">Shporta juaj është e zbrazët</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        {item.image && (item.image.startsWith('http') || item.image.startsWith('data:image')) ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '4px'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className="cart-placeholder"
                          style={{ display: (item.image && (item.image.startsWith('http') || item.image.startsWith('data:image'))) ? 'none' : 'flex' }}
                        >
                          {item.image || '📱'}
                        </div>
                      </div>
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.price}€ × {item.quantity} = {item.price * item.quantity}€</p>
                        <div className="cart-item-controls">
                          <button onClick={() => updateQuantity(item.id, -1)}>
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            <FaPlus />
                          </button>
                          <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                            Hiq
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-total-section">
                    <span>Totali:</span>
                    <span className="cart-total-price">{cartTotal}€</span>
                  </div>
                  <a href="/contact" className="btn btn-primary checkout-btn">
                    Porosit Tani
                  </a>
                  <p className="checkout-note">Për porosi, na kontaktoni dhe ne do t'ju dërgojmë produktet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
