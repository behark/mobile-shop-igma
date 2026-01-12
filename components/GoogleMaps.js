export default function GoogleMaps() {
  // Google Maps embed URL for Mitrovicë, Kosovo
  // You can get the exact embed URL by:
  // 1. Go to Google Maps
  // 2. Search for "Rr. Mbrëtresha Teutë, Mitrovicë, Kosovo"
  // 3. Click Share > Embed a map > Copy HTML
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d20.8656!3d42.8836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUzJzAxLjAiTiAyMMKwNTEnNTYuMiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"

  return (
    <section id="location" className="google-maps">
      <div className="container">
        <div className="section-header">
          <h2>Gjeni Ne</h2>
          <p>Na vizitoni në adresën tonë në Mitrovicë</p>
        </div>
        <div className="map-wrapper">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mobile Shop IGMA Location"
          ></iframe>
          <div className="map-info">
            <div className="map-address">
              <h3>📍 Adresa</h3>
              <p>Rr. Mbrëtresha Teutë<br />Mitrovicë, Kosovë</p>
            </div>
            <div className="map-contact">
              <h3>📞 Kontakt</h3>
              <p>
                <a href="tel:+38345444244">045 444 244</a><br />
                <a href="mailto:igma2unlock@gmail.com">igma2unlock@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
