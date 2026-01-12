'use client'

import { useState } from 'react'
import { FaShoppingCart, FaPlus, FaMinus, FaCheck } from 'react-icons/fa'
import Image from 'next/image'

export default function OnlineStore() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Kutitë Premium iPhone',
      price: 15,
      image: '📱',
      category: 'Kutitë',
      inStock: true
    },
    {
      id: 2,
      name: 'Kutitë Premium Samsung',
      price: 12,
      image: '📱',
      category: 'Kutitë',
      inStock: true
    },
    {
      id: 3,
      name: 'Mbrojtës Ekrani Tempered Glass',
      price: 8,
      image: '🛡️',
      category: 'Aksesorë',
      inStock: true
    },
    {
      id: 4,
      name: 'Karikues i Shpejtë',
      price: 20,
      image: '🔋',
      category: 'Aksesorë',
      inStock: true
    },
    {
      id: 5,
      name: 'Kabllo USB-C',
      price: 10,
      image: '🔌',
      category: 'Aksesorë',
      inStock: true
    },
    {
      id: 6,
      name: 'Kutitë Karl Lagerfeld',
      price: 10,
      image: '📱',
      category: 'Kutitë',
      inStock: true
    }
  ]

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
            {products.map((product) => (
              <div key={product.id} className="product-card-store">
                <div className="product-image-store">
                  <div className="product-placeholder">{product.image}</div>
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
            ))}
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
                        <div className="cart-placeholder">{item.image}</div>
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
