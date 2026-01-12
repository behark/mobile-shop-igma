import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/igma2/',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: '#',
      color: '#E4405F'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/38345444244',
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:igma2unlock@gmail.com',
      color: '#EA4335'
    }
  ]

  return (
    <div className="social-media">
      <h4>Na Ndiqni</h4>
      <div className="social-icons">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="social-icon"
              aria-label={social.name}
              style={{ '--social-color': social.color }}
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </div>
  )
}
