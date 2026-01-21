import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaLock, FaImage, FaUpload } from 'react-icons/fa'

export default function AdminDashboard() {
  const [accessories, setAccessories] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '📱',
    category: 'Aksesorë',
    inStock: true,
    description: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const authToken = localStorage.getItem('adminToken')
    if (authToken) {
      // Verify token is still valid by checking with API
      setIsAuthenticated(true)
      loadAccessories()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Verify password with API (server-side check)
      const response = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Password is correct, store token and authenticate
        setIsAuthenticated(true)
        localStorage.setItem('adminToken', password) // Store password as token for API calls
        setPassword('')
        loadAccessories()
      } else {
        const errorData = await response.json().catch(() => ({}))
        setError(errorData.error || 'Fjalëkalimi i gabuar!')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Gabim në komunikim me serverin')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminToken')
    setPassword('')
    setError('')
  }

  const loadAccessories = async () => {
    try {
      const response = await fetch('/api/accessories')
      if (response.ok) {
        const data = await response.json()
        setAccessories(data)
      }
    } catch (err) {
      setError('Gabim në ngarkimin e aksesorëve')
    } finally {
      setLoading(false)
    }
  }

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken')
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      if (editingId) {
        // Update existing
        const response = await fetch('/api/accessories', {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            id: editingId,
            ...formData,
            price: parseFloat(formData.price)
          })
        })

        if (response.ok) {
          setSuccess('Aksesori u përditësua me sukses!')
          setShowAddForm(false)
          setEditingId(null)
          resetForm()
          loadAccessories()
        } else {
          const errorData = await response.json().catch(() => ({}))
          setError(`Gabim në përditësimin e aksesorit: ${errorData.error || response.statusText}`)
        }
      } else {
        // Add new
        const response = await fetch('/api/accessories', {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            ...formData,
            price: parseFloat(formData.price)
          })
        })

        if (response.ok) {
          setSuccess('Aksesori u shtua me sukses!')
          setShowAddForm(false)
          resetForm()
          loadAccessories()
        } else {
          const errorData = await response.json().catch(() => ({}))
          setError(`Gabim në shtimin e aksesorit: ${errorData.error || response.statusText}`)
        }
      }
    } catch (err) {
      console.error('Error:', err)
      setError(`Gabim në komunikim me serverin: ${err.message}`)
    }
  }

  const handleEdit = (accessory) => {
    setFormData({
      name: accessory.name,
      price: accessory.price.toString(),
      image: accessory.image,
      category: accessory.category,
      inStock: accessory.inStock,
      description: accessory.description || ''
    })
    // Set image preview if it's a URL (not emoji)
    if (accessory.image && (accessory.image.startsWith('http') || accessory.image.startsWith('data:image'))) {
      setImagePreview(accessory.image)
    } else {
      setImagePreview(null)
    }
    setEditingId(accessory.id)
    setShowAddForm(true)
    setError('')
    setSuccess('')
  }

  const handleDelete = async (id) => {
    if (!confirm('Jeni të sigurt që dëshironi të fshini këtë aksesori?')) {
      return
    }

    try {
      const response = await fetch(`/api/accessories?id=${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      })

      if (response.ok) {
        setSuccess('Aksesori u fshi me sukses!')
        loadAccessories()
      } else {
        const errorData = await response.json().catch(() => ({}))
        setError(`Gabim në fshirjen e aksesorit: ${errorData.error || response.statusText}`)
      }
    } catch (err) {
      console.error('Error:', err)
      setError(`Gabim në komunikim me serverin: ${err.message}`)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      image: '📱',
      category: 'Aksesorë',
      inStock: true,
      description: ''
    })
    setImagePreview(null)
    setEditingId(null)
  }

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Ju lutem zgjidhni një imazh (JPG, PNG, etc.)')
      return
    }

    // Validate file size (max 4.5MB for Vercel Blob server uploads)
    if (file.size > 4.5 * 1024 * 1024) {
      setError('Imazhi është shumë i madh. Maksimumi është 4.5MB.')
      return
    }

    setUploadingImage(true)
    setError('')

    try {
      // Convert to base64
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64Image = reader.result

        // Show preview
        setImagePreview(base64Image)

        // Upload to server
        try {
          const response = await fetch('/api/upload-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              image: base64Image,
              filename: `product-${Date.now()}-${file.name}`,
            }),
          })

          if (response.ok) {
            const data = await response.json()
            setFormData({ ...formData, image: data.url })
            setSuccess('Imazhi u ngarkua me sukses!')
          } else {
            const errorData = await response.json().catch(() => ({}))
            setError(errorData.error || 'Gabim në ngarkimin e imazhit')
            setImagePreview(null)
          }
        } catch (err) {
          console.error('Upload error:', err)
          setError('Gabim në ngarkimin e imazhit')
          setImagePreview(null)
        } finally {
          setUploadingImage(false)
        }
      }
      reader.readAsDataURL(file)
    } catch (err) {
      console.error('Image processing error:', err)
      setError('Gabim në përpunimin e imazhit')
      setUploadingImage(false)
    }
  }

  const cancelForm = () => {
    setShowAddForm(false)
    resetForm()
    setError('')
    setSuccess('')
  }

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Dashboard - Mobile Shop IGMA</title>
        </Head>
        <Navbar />
        <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <div className="container" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <FaLock size={48} style={{ color: '#007bff', marginBottom: '1rem' }} />
                <h1 style={{ marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                <p style={{ color: '#666' }}>Futni fjalëkalimin për të hyrë</p>
              </div>
              <form onSubmit={handleLogin}>
                {error && (
                  <div style={{
                    background: '#fee',
                    color: '#c33',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    marginBottom: '1rem'
                  }}>
                    {error}
                  </div>
                )}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Fjalëkalimi
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem'
                    }}
                    required
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Hyr
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Menaxhimi i Aksesorëve | Mobile Shop IGMA</title>
      </Head>
      <Navbar />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div>
              <h1 style={{ marginBottom: '0.5rem' }}>Admin Dashboard</h1>
              <p style={{ color: '#666' }}>Menaxhoni aksesorët dhe produktet</p>
            </div>
            <div>
              <button
                onClick={() => {
                  setShowAddForm(true)
                  resetForm()
                }}
                className="btn btn-primary"
                style={{ marginRight: '1rem' }}
              >
                <FaPlus /> Shto Aksesori
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                Dil
              </button>
            </div>
          </div>

          {error && (
            <div style={{
              background: '#fee',
              color: '#c33',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{
              background: '#efe',
              color: '#3c3',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              {success}
            </div>
          )}

          {showAddForm && (
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h2 style={{ marginBottom: '1.5rem' }}>
                {editingId ? 'Përditëso Aksesori' : 'Shto Aksesori i Ri'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Emri *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Çmimi (€) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Imazhi i Produktit
                  </label>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={uploadingImage}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          cursor: uploadingImage ? 'not-allowed' : 'pointer'
                        }}
                      />
                      <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
                        Ose përdorni emoji/ikonë më poshtë (maksimumi 5MB për imazh)
                      </p>
                    </div>
                    {imagePreview && (
                      <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '2px solid #ddd',
                        flexShrink: 0
                      }}>
                        <img
                          src={imagePreview}
                          alt="Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {uploadingImage && (
                    <p style={{ color: '#007bff', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                      Duke ngarkuar imazhin...
                    </p>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Ikona/Emoji (Alternativë)
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => {
                        setFormData({ ...formData, image: e.target.value })
                        if (e.target.value && !e.target.value.startsWith('http') && !e.target.value.startsWith('data:image')) {
                          setImagePreview(null)
                        }
                      }}
                      placeholder="📱"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                    />
                    <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
                      Ose vendosni një emoji/ikonë nëse nuk keni imazh
                    </p>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Kategoria
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                    >
                      <option value="Aksesorë">Aksesorë</option>
                      <option value="Kutitë">Kutitë</option>
                      <option value="Mbrojtës Ekrani">Mbrojtës Ekrani</option>
                      <option value="Karikues">Karikues</option>
                      <option value="Kabllo">Kabllo</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Përshkrimi
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={formData.inStock}
                      onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    />
                    <span>Në Stok</span>
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="submit" className="btn btn-primary">
                    <FaSave /> {editingId ? 'Përditëso' : 'Ruaj'}
                  </button>
                  <button type="button" onClick={cancelForm} className="btn btn-secondary">
                    <FaTimes /> Anulo
                  </button>
                </div>
              </form>
            </div>
          )}

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Duke ngarkuar...</p>
            </div>
          ) : (
            <div style={{
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f5f5f5' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Ikona</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Emri</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Kategoria</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Çmimi</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Stoku</th>
                    <th style={{ padding: '1rem', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Veprime</th>
                  </tr>
                </thead>
                <tbody>
                  {accessories.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                        Nuk ka aksesorë. Shtoni të parin!
                      </td>
                    </tr>
                  ) : (
                    accessories.map((accessory) => {
                      const isImageUrl = accessory.image && (accessory.image.startsWith('http') || accessory.image.startsWith('data:image'))

                      return (
                        <tr key={accessory.id} style={{ borderBottom: '1px solid #eee' }}>
                          <td style={{ padding: '1rem' }}>
                            {isImageUrl ? (
                              <img
                                src={accessory.image}
                                alt={accessory.name}
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                  border: '1px solid #ddd'
                                }}
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                  e.target.nextSibling.style.display = 'inline-block'
                                }}
                              />
                            ) : null}
                            <span style={{
                              fontSize: '1.5rem',
                              display: isImageUrl ? 'none' : 'inline-block'
                            }}>
                              {accessory.image || '📱'}
                            </span>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <strong>{accessory.name}</strong>
                            {accessory.description && (
                              <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
                                {accessory.description}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '1rem' }}>{accessory.category}</td>
                          <td style={{ padding: '1rem' }}>{accessory.price}€</td>
                          <td style={{ padding: '1rem' }}>
                            <span style={{
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.875rem',
                              background: accessory.inStock ? '#d4edda' : '#f8d7da',
                              color: accessory.inStock ? '#155724' : '#721c24'
                            }}>
                              {accessory.inStock ? 'Në Stok' : 'Jashtë Stokut'}
                            </span>
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right' }}>
                            <button
                              onClick={() => handleEdit(accessory)}
                              className="btn btn-secondary btn-sm"
                              style={{ marginRight: '0.5rem' }}
                            >
                              <FaEdit /> Ndrysho
                            </button>
                            <button
                              onClick={() => handleDelete(accessory.id)}
                              className="btn btn-danger btn-sm"
                            >
                              <FaTrash /> Fshi
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
