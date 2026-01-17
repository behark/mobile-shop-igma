/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the business better
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mobile Shop IGMA",
  "image": "https://igmaunlock.com/logo.jpg",
  "description": "Qendra juaj e besuar për shërbime telefonash mobil në Mitrovicë, Kosovë. Shitje, riparime, ndërrim ekranesh dhe shërbime dekodimi.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rr. Mbrëtresha Teutë",
    "addressLocality": "Mitrovicë",
    "addressRegion": "Kosovë",
    "addressCountry": "XK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.8833,
    "longitude": 20.8667
  },
  "url": "https://igmaunlock.com",
  "telephone": "+38345444244",
  "email": "igma2unlock@gmail.com",
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/igma2/",
    "https://www.instagram.com/igma2unlock/"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Mitrovicë"
  },
  "serviceType": [
    "Mobile Phone Repair",
    "Phone Unlocking",
    "Screen Replacement",
    "Mobile Phone Sales"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mobile Shop IGMA",
  "url": "https://igmaunlock.com",
  "logo": "https://igmaunlock.com/logo.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+38345444244",
    "contactType": "customer service",
    "email": "igma2unlock@gmail.com",
    "availableLanguage": ["Albanian", "sq"]
  },
  "sameAs": [
    "https://www.facebook.com/igma2/",
    "https://www.instagram.com/igma2unlock/"
  ]
};
