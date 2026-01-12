# Mobile Shop IGMA Website

Një faqe web moderne dhe responsive për Mobile Shop IGMA - një qendër shërbimi për telefonat mobil e vendosur në Mitrovicë, Kosovë.

**Gjithë përmbajtja e faqes është në gjuhën shqipe.**

## 🚀 Technology Stack

This website is built with **Next.js 14** and **React 18**:

✅ **Modern Framework** - Built with Next.js for optimal performance and SEO  
✅ **React Components** - Modular, reusable components  
✅ **Server-Side Rendering** - Better SEO and initial page load  
✅ **Easy Deployment** - Deploy to Vercel, Netlify, or any Node.js hosting  
✅ **Scalable** - Easy to add features like blog, CMS, or e-commerce  

## ✨ Features

### Design & Visuals
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Professional Icons**: React Icons (Font Awesome) throughout
- **Cover Photo Background**: Beautiful cover photo as hero section background
- **Smooth Animations**: Scroll-triggered animations and transitions

### Functionality
- **Booking System**: Online appointment booking with date/time selection
- **Live Chat Widget**: Interactive chat with WhatsApp integration
- **Quote Calculator**: Instant price estimates for repairs
- **Repair Tracking**: Track repair status with tracking ID
- **Online Store**: Shopping cart for phone accessories
- **Newsletter Signup**: Email subscription form

### Business Features
- **Multi-page Structure**: Dedicated pages for Services, About, Contact, Gallery
- **Social Media Integration**: Links to Facebook, Instagram, WhatsApp, Email
- **Google Maps**: Interactive map showing business location
- **Opening Hours**: Display business hours with current day highlight
- **Testimonials**: Customer reviews and ratings
- **FAQ Section**: Expandable frequently asked questions
- **Pricing Plans**: Service pricing tiers

## 📁 Project Structure

```
igma/
├── components/          # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Benefits.js
│   ├── Products.js
│   ├── SocialProof.js
│   ├── About.js
│   ├── ServiceProcess.js
│   ├── Gallery.js
│   ├── Testimonials.js
│   ├── Pricing.js
│   ├── FAQ.js
│   ├── OpeningHours.js
│   ├── GoogleMaps.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── FloatingWhatsApp.js
│   ├── BackToTop.js
│   ├── QuoteCalculator.js
│   ├── BookingSystem.js
│   ├── LiveChat.js
│   ├── Newsletter.js
│   ├── RepairTracking.js
│   ├── OnlineStore.js
│   └── SocialMedia.js
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── index.js       # Home page
│   ├── services.js    # Services page
│   ├── about.js       # About page
│   ├── contact.js     # Contact page
│   └── gallery.js     # Gallery page
├── public/            # Static assets
│   ├── cover-new.jpg  # Hero background image
│   └── logo.jpg       # Company logo
├── styles/            # CSS files
│   └── globals.css    # Global styles
├── package.json       # Dependencies
├── next.config.js    # Next.js configuration
└── jsconfig.json     # JavaScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd igma
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/mobile-shop-igma.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify, or connect your GitHub repository for automatic deployments.

## 📝 Environment Variables

No environment variables are required for basic functionality. If you want to add backend features later, you can create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_API_KEY=your_email_service_key
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Information

- **Address**: Rr. Mbrëtresha Teutë, Mitrovicë, Kosovo
- **Phone**: 045 444 244
- **Email**: igma2unlock@gmail.com
- **Website**: igmaunlock.com
- **Facebook**: [Mobile Shop IGMA](https://www.facebook.com/igma2/)

## 📄 License

This website is created for Mobile Shop IGMA client use.

## 🙏 Acknowledgments

- Built with Next.js and React
- Icons from React Icons (Font Awesome)
- Images from Unsplash

---

**Made with ❤️ for Mobile Shop IGMA**
