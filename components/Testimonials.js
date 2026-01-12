export default function Testimonials() {
  const testimonials = [
    {
      text: 'Shërbim shumë i shkëlqyer! Riparuan telefonin tim shumë shpejt dhe me çmim të arsyeshëm. Rekomandoj me siguri!',
      author: 'Arben K.',
      stars: 5
    },
    {
      text: 'Ekip profesional dhe i përgjegjshëm. Ndryshuan ekranin e telefonit tim dhe tani duket si i ri. Faleminderit!',
      author: 'Blerta M.',
      stars: 5
    },
    {
      text: 'Shërbim i shkëlqyer dhe çmime konkurruese. Telefoni im u çlirua shpejt dhe pa probleme. Do të kthehem përsëri!',
      author: 'Driton S.',
      stars: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Çfarë Thonë Klientët Tanë</h2>
          <p>Kënaqësia e klientëve është prioriteti ynë</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="testimonial-author">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
