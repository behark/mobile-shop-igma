import { useState } from 'react'
import { FaStar, FaUser } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

// Format date consistently for server and client
function formatDate(dateString) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

export default function ReviewsRatings() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    review: '',
    service: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // In production, this would fetch from a database
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Arben K.',
      rating: 5,
      review: 'Shërbim shumë i shkëlqyer! Riparuan telefonin tim shumë shpejt dhe me çmim të arsyeshëm. Rekomandoj me siguri!',
      service: 'Ndryshim Ekrani',
      date: '2025-01-10',
      verified: true
    },
    {
      id: 2,
      name: 'Blerta M.',
      rating: 5,
      review: 'Ekip profesional dhe i përgjegjshëm. Ndryshuan ekranin e telefonit tim dhe tani duket si i ri. Faleminderit!',
      service: 'Ndryshim Ekrani',
      date: '2025-01-08',
      verified: true
    },
    {
      id: 3,
      name: 'Driton S.',
      rating: 5,
      review: 'Shërbim i shkëlqyer dhe çmime konkurruese. Telefoni im u çlirua shpejt dhe pa probleme. Do të kthehem përsëri!',
      service: 'Dekodim',
      date: '2025-01-05',
      verified: true
    },
    {
      id: 4,
      name: 'Arta H.',
      rating: 5,
      review: 'Shumë profesionistë! Riparuan baterinë e telefonit tim dhe tani funksionon si i ri. Stafi është shumë i sjellshëm.',
      service: 'Ndryshim Baterie',
      date: '2025-01-03',
      verified: true
    }
  ])

  const services = [
    'Ndryshim Ekrani',
    'Ndryshim Baterie',
    'Riparim',
    'Dekodim',
    'Diagnostikim',
    'Tjetër'
  ]

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRatingClick = (rating) => {
    setFormData({
      ...formData,
      rating
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.rating || !formData.review || !formData.name) {
      alert('Ju lutem plotësoni të gjitha fushat e detyrueshme.')
      return
    }

    // In production, this would send to an API
    const newReview = {
      id: reviews.length + 1,
      name: formData.name,
      rating: parseInt(formData.rating),
      review: formData.review,
      service: formData.service || 'Tjetër',
      date: new Date().toISOString().split('T')[0],
      verified: false
    }

    // Add to reviews (in production, this would be handled by API)
    setReviews([newReview, ...reviews])

    // Send email notification (optional)
    try {
      // await sendEmailNotification(...)
    } catch (error) {
      console.error('Failed to send notification:', error)
    }

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      rating: 0,
      review: '',
      service: ''
    })

    setTimeout(() => {
      setSubmitted(false)
      setShowForm(false)
    }, 3000)
  }

  return (
    <section id="reviews" className="reviews-ratings" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Vlerësimet dhe Komentet</h2>
          <p>Lexoni çfarë thonë klientët tanë dhe shkruani vlerësimin tuaj</p>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="rating-overview">
            <div className="rating-score">
              <span className="rating-number">{averageRating}</span>
              <div className="rating-stars-large">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= averageRating ? 'filled' : ''}
                  />
                ))}
              </div>
              <p className="rating-count">Bazuar në {reviews.length} vlerësime</p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
            aria-label="Shkruani një vlerësim"
          >
            {showForm ? 'Mbyll Formularin' : 'Shkruani Vlerësimin Tuaj'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="review-form-container">
            {submitted ? (
              <div className="review-success">
                <FaStar className="success-icon" />
                <h3>Faleminderit për vlerësimin tuaj!</h3>
                <p>Vlerësimi juaj do të shfaqet pas verifikimit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                  <label htmlFor="review-name">Emri Juaj *</label>
                  <input
                    type="text"
                    id="review-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Emri juaj ose inicialet"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="review-email">Email (Opsionale)</label>
                  <input
                    type="email"
                    id="review-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Vlerësimi Juaj *</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-button ${formData.rating >= star ? 'active' : ''}`}
                        onClick={() => handleRatingClick(star)}
                        aria-label={`Vlerëso me ${star} yll${star > 1 ? 'e' : ''}`}
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="review-service">Shërbimi (Opsionale)</label>
                  <select
                    id="review-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Zgjidhni shërbimin</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="review-text">Komenti Juaj *</label>
                  <textarea
                    id="review-text"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Shkruani komentin tuaj këtu..."
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Dërgo Vlerësimin
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews List */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className={`review-card ${inView ? 'animate-fadeIn' : ''}`}>
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    <FaUser />
                  </div>
                  <div>
                    <h4>{review.name}</h4>
                    {review.verified && (
                      <span className="verified-badge">✓ Verifikuar</span>
                    )}
                  </div>
                </div>
                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= review.rating ? 'filled' : ''}
                    />
                  ))}
                </div>
              </div>
              {review.service && (
                <p className="review-service">Shërbimi: {review.service}</p>
              )}
              <p className="review-text">{review.review}</p>
              <p className="review-date">{formatDate(review.date)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
