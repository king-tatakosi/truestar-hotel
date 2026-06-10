# AfriStay Hotel Template

A professional, fully customisable hotel and hospitality website template built for **African hotels, guest houses, lodges, boutique hotels, and hospitality businesses**. Designed with a warm dark mode aesthetic, soft gold accents, and a mobile-first approach.

---

## Features

- **Mobile-optimised sticky navbar** with animated slide-in menu and active-section tracking
- **Cinematic hero section** with CSS ambient gradients, stats, and dual CTAs
- **About section** with trust badges, statistics, and floating highlight card
- **Room cards** with amenities, pricing, availability CTA, and image-ready structure
- **Services grid** with 6 bespoke service cards including featured highlighting
- **Guest testimonials** — desktop grid + mobile carousel with pagination
- **Booking enquiry form** with check-in/out date pickers, room selector, and success state
- **Contact section** with WhatsApp button, direct call button, and embedded Google Maps
- **FAQ accordion** with smooth expand/collapse animations
- **Footer** with quick links, services, contact info, and social media
- **Floating WhatsApp button** accessible on every page
- **Framer Motion** animations throughout — scroll-triggered, staggered, and accessible

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| TailwindCSS | 3 | Utility-first CSS |
| Framer Motion | 11 | Animations |
| Lucide React | 0.436 | SVG icon library |
| Google Fonts | CDN | Playfair Display SC + Karla |

---

## Quick Start

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (or pnpm / yarn)

### Installation

```bash
# 1. Navigate into the project folder
cd template3

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Project Structure

```
template3/
├── index.html                    # HTML shell — SEO meta tags, Google Fonts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Theme: custom colors, fonts, shadows
├── postcss.config.js             # PostCSS plugins
├── package.json                  # Dependencies and scripts
│
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Root layout — composes all sections
    ├── index.css                 # Global styles, Tailwind layers
    │
    ├── data/                     # ← ALL customisation starts here
    │   ├── hotel.js              # Hotel name, contact, stats, social links
    │   ├── rooms.js              # Room listings, pricing, amenities
    │   ├── services.js           # Service cards
    │   ├── testimonials.js       # Guest reviews
    │   └── faqs.js               # FAQ questions and answers
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx        # Sticky nav, mobile drawer, scroll-aware
    │   │   └── Footer.jsx        # 4-col footer, social links, CTA strip
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx          # Full-screen hero, stats, floating cards
    │   │   ├── About.jsx         # Story, checklist, stats bar
    │   │   ├── Rooms.jsx         # Room cards grid
    │   │   ├── Services.jsx      # Services grid with featured highlight
    │   │   ├── Testimonials.jsx  # Reviews grid + mobile carousel
    │   │   ├── Contact.jsx       # Booking form + WhatsApp/call/map
    │   │   └── FAQ.jsx           # Accordion FAQ + contact shortcuts
    │   │
    │   └── ui/
    │       ├── Button.jsx        # Reusable button (variants: gold, outline, ghost)
    │       └── SectionHeader.jsx # Consistent section titles with badge + divider
    │
    └── assets/                   # Static assets (add hotel images here)
```

---

## Customisation Guide

### 1. Hotel Information

Open **`src/data/hotel.js`** — this is the single source of truth for all hotel details.

```js
export const hotelData = {
  name: "Savanna Grand",          // ← Hotel name (used in navbar, footer, SEO)
  initials: "SG",                 // ← 2 letters shown in the logo mark
  type: "Luxury Hotel",          // ← Subtitle under logo
  tagline: "Where African...",   // ← Hero tagline
  description: "...",            // ← About section paragraph
  established: "2009",           // ← Year established

  // Contact
  phone: "+27 11 000 0000",      // ← Display phone number
  phoneRaw: "+27110000000",      // ← For tel: links (no spaces)
  whatsapp: "27110000000",       // ← WhatsApp number (country code, no +)
  whatsappMessage: "Hello!...",  // ← Pre-filled WhatsApp message

  email: "reservations@...",
  address: "123 Mandela Blvd",
  city: "Johannesburg",
  country: "South Africa",
  postalCode: "2196",

  // Google Maps embed URL (from Google Maps > Share > Embed a map > copy src)
  googleMapsUrl: "https://www.google.com/maps/embed?pb=...",

  checkIn: "14:00",
  checkOut: "11:00",

  socialLinks: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    tripadvisor: "https://tripadvisor.com/yourpage",
  },

  stats: [                       // ← Hero & About stats (change values freely)
    { value: "50+", label: "Premium Rooms" },
    { value: "4.9", label: "Guest Rating" },
    { value: "15k+", label: "Happy Guests" },
    { value: "15", label: "Years of Excellence" },
  ],

  highlights: [                  // ← About section checklist items
    "Award-winning African cuisine",
    // add more...
  ],
}
```

---

### 2. Colors & Branding

All brand colors live in **`tailwind.config.js`** under `theme.extend.colors`:

```js
gold: {
  400: '#D4A843',   // Hover gold
  500: '#C9A84C',   // PRIMARY accent — change this to your brand color
  600: '#A8893E',   // Darker gold for text
},
cream: {
  200: '#F5EED8',   // PRIMARY text color — warm off-white
  500: '#BFA98A',   // Muted text
  600: '#9E8B6E',   // Very muted text
},
dark: {
  300: '#221A12',   // Elevated surfaces / cards
  400: '#1A1410',   // Card backgrounds
  600: '#0E0B07',   // Slightly lighter BG
  700: '#0A0806',   // Main page background — darkest
},
```

**To change the brand color** (e.g., to deep blue instead of gold):
1. Replace all `#C9A84C` instances with your color
2. Update the `gold` palette keys consistently
3. Adjust `gold-gradient` in `backgroundImage`

---

### 3. Typography

Fonts are loaded in **`index.html`** via Google Fonts CDN and configured in **`tailwind.config.js`**:

```js
fontFamily: {
  heading: ['"Playfair Display SC"', 'Georgia', 'serif'],
  body: ['Karla', 'system-ui', 'sans-serif'],
},
```

**To change fonts:**

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select your fonts, copy the `@import` URL
3. Replace the `<link>` tags in `index.html`
4. Update `fontFamily.heading` and `fontFamily.body` in `tailwind.config.js`

Popular African hospitality pairings:
- Headings: **Cormorant Garamond**, **Libre Baskerville**, **DM Serif Display**
- Body: **Inter**, **DM Sans**, **Nunito**

---

### 4. Room Listings

Edit **`src/data/rooms.js`** to add, remove, or modify rooms:

```js
{
  id: 1,
  name: "Classic Room",          // ← Displayed as card heading
  type: "standard",              // ← "standard" | "deluxe" | "suite"
  description: "...",
  price: 1800,                   // ← Numeric price
  currency: "ZAR",               // ← Currency code
  priceLabel: "per night",
  size: "32 m²",
  capacity: "2 Guests",
  bedType: "Queen Bed",
  amenities: [
    { icon: "Wifi", label: "Free Wi-Fi" },
    { icon: "AirVent", label: "Air Conditioning" },
    // See Lucide icon names at lucide.dev
  ],
  featured: false,               // ← true = "Most Popular" badge
  available: true,               // ← false = "Fully Booked" badge
  imageUrl: null,                // ← null = gradient placeholder; set to "/images/room-1.jpg"
},
```

**Available amenity icons** (from Lucide): `Wifi`, `AirVent`, `Tv`, `Coffee`, `Bath`, `ParkingSquare`, `Utensils`, `Wine`, `ConciergeBell`, `BedDouble`

---

### 5. Services

Edit **`src/data/services.js`**. Each service has:

```js
{
  id: 1,
  icon: "UtensilsCrossed",       // ← Lucide icon name
  title: "Fine Dining Restaurant",
  description: "...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  highlight: true,               // ← true = golden featured card styling
}
```

**Available icons**: `UtensilsCrossed`, `CalendarDays`, `Presentation`, `Waves`, `Car`, `BedDouble`

Add more by importing the icon in `src/components/sections/Services.jsx` and adding to `iconMap`.

---

### 6. Guest Testimonials

Edit **`src/data/testimonials.js`**:

```js
{
  id: 1,
  name: "Adaora Okafor",
  location: "Lagos, Nigeria",
  initials: "AO",                // ← 2 initials for the avatar
  color: "from-amber-600 to-orange-700",  // ← Tailwind gradient for avatar bg
  rating: 5,                     // ← 1–5 stars
  title: "An Unforgettable Stay",
  review: "Full review text...",
  date: "August 2024",
  roomType: "Presidential Suite",
}
```

**Avatar colors** — use any Tailwind gradient pair:
- `from-amber-600 to-orange-700`
- `from-teal-600 to-emerald-700`
- `from-purple-600 to-violet-700`
- `from-rose-600 to-red-700`
- `from-blue-600 to-indigo-700`

---

### 7. FAQ

Edit **`src/data/faqs.js`**:

```js
{
  id: 1,
  question: "What are check-in times?",
  answer: "Standard check-in is 14:00...",
}
```

The first FAQ opens by default. To change this, edit the `useState(1)` in `FAQ.jsx`:

```js
const [openId, setOpenId] = useState(null)   // All closed by default
const [openId, setOpenId] = useState(1)       // First item open
```

---

### 8. Contact & WhatsApp Button

**WhatsApp number** — in `src/data/hotel.js`:
```js
whatsapp: "27110000000",         // Format: country code (no +) + number
whatsappMessage: "Hello! I'd like to make a reservation.",
```

**Direct Call** — update `phone` in `hotel.js`. The tel: link auto-generates from `phoneRaw`.

**Google Maps embed**:
1. Open Google Maps, navigate to your hotel location
2. Click Share → Embed a map
3. Copy the URL inside `src="..."` (not the entire iframe)
4. Paste into `googleMapsUrl` in `hotel.js`

The map uses `filter: invert(90%) hue-rotate(180deg)` for a dark-themed appearance. Remove this filter if you prefer the default map style.

---

### 9. Navigation Links

Edit the `navLinks` array in **`src/components/layout/Navbar.jsx`**:

```js
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // Add or remove links here
]
```

Each `href` must match the `id` on the corresponding section:
```jsx
<section id="rooms">...</section>
```

---

### 10. Social Media Links

In **`src/data/hotel.js`**:
```js
socialLinks: {
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  twitter: "https://twitter.com/yourpage",
  tripadvisor: "https://tripadvisor.com/yourpage",
}
```

The footer renders Facebook, Instagram, Twitter icons automatically. TripAdvisor uses a generic link icon. To add more platforms, import the icon from `lucide-react` in `Footer.jsx` and add it to `socialIcons`.

---

## Replacing Images

The template uses CSS gradient placeholders that work without any images. To add real photos:

### Hero Section

In **`src/components/sections/Hero.jsx`**, replace the gradient background with an image:

```jsx
// Before (CSS gradient):
<section className="... bg-hero-pattern">

// After (with image):
<section
  className="..."
  style={{
    backgroundImage: 'url(/images/hotel-hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

Add a dark overlay for text legibility:
```jsx
<div className="absolute inset-0 bg-dark-700/70" />
```

### Room Cards

In **`src/data/rooms.js`**, set the `imageUrl` field:
```js
imageUrl: "/images/rooms/classic-room.jpg"
```

The `RoomCard` component in `Rooms.jsx` checks `room.imageUrl` — if set, it renders an `<img>` tag; otherwise it shows the gradient placeholder.

### Recommended Image Sizes

| Location | Recommended Size | Format |
|---|---|---|
| Hero background | 1920×1080px | WebP / JPEG |
| About section | 800×1000px | WebP / JPEG |
| Room cards | 800×520px | WebP / JPEG |
| OG image (social share) | 1200×630px | JPEG |
| Favicon | 32×32px | SVG or PNG |

Place all images in **`public/images/`**. Files in `public/` are served at the root URL (e.g., `/images/hero.jpg`).

---

## Booking Form Backend

The booking form in `Contact.jsx` currently shows a success message after a 1-second timeout (simulated). To connect it to a real backend:

### Option 1: EmailJS (no backend required)

```bash
npm install @emailjs/browser
```

```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    await emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      { from_name: form.name, from_email: form.email, ...form },
      'PUBLIC_KEY'
    )
    setSubmitted(true)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}
```

### Option 2: Formspree

Replace the `onSubmit` handler:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom API

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  const res = await fetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSubmitted(true)
  setLoading(false)
}
```

---

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done — Netlify auto-deploys on push

**Or deploy via CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
},
"homepage": "https://yourusername.github.io/your-repo"
```

In `vite.config.js`, add:
```js
base: '/your-repo-name/',
```

Then:
```bash
npm run build && npm run deploy
```

### cPanel / Shared Hosting

1. Run `npm run build`
2. Upload the contents of `dist/` to your `public_html` folder via FTP
3. No server configuration needed — this is a static site

---

## SEO Optimisation

### Meta Tags

All primary meta tags are in **`index.html`**. Update these for each hotel:

```html
<title>Your Hotel Name – Your Tagline</title>
<meta name="description" content="150-character description..." />
<meta name="keywords" content="hotel, accommodation, ..." />
<meta property="og:title" content="Your Hotel Name" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.jpg" />
<link rel="canonical" href="https://yourhotel.com/" />
```

### Structured Data (JSON-LD)

Add to `index.html` `<head>` for rich Google results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Savanna Grand Hotel",
  "description": "Luxury African hospitality...",
  "url": "https://savannagrandhotel.com",
  "telephone": "+27110000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Mandela Boulevard",
    "addressLocality": "Johannesburg",
    "addressCountry": "ZA"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "priceRange": "ZAR 1800–8500"
}
</script>
```

### Performance Checklist

- [ ] Replace placeholder gradients with real WebP images
- [ ] Add `loading="lazy"` to all images below the fold
- [ ] Set correct `og:image` (1200×630px JPEG)
- [ ] Update canonical URL to production domain
- [ ] Enable HTTPS on hosting
- [ ] Add Google Analytics or Plausible

---

## Responsive Breakpoints

The template is fully responsive at:

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | 375px | Single column, stacked |
| Tablet | 768px | 2-column grids, wider cards |
| Laptop | 1024px | 3-column grid, side-by-side |
| Desktop | 1440px | Full layout, floating elements |

**Mobile-specific features:**
- Testimonials switch to a single-card carousel with dot pagination
- Navbar becomes a slide-in drawer from the right
- Hero floating stats cards are hidden (reduces clutter)
- About section stacks image above text
- FAQ layout stacks header above accordion

---

## Accessibility

The template follows WCAG 2.1 AA guidelines:

- All interactive elements have `cursor-pointer`
- Focus rings on all focusable elements (`focus-visible:outline-gold-500`)
- `aria-label` on icon-only buttons and links
- Form inputs have associated `<label>` elements
- Images have `alt` attributes
- Mobile menu has `role="dialog"` and `aria-modal`
- FAQ accordion uses `aria-expanded`, `aria-controls`, `role="region"`
- `prefers-reduced-motion` disables animations
- Color contrast ratios meet 4.5:1 minimum

---

## Reusing Across Multiple Hotel Projects

This template is designed for rapid reuse. For each new hotel project:

1. **Duplicate** the `template3` folder
2. **Update** `src/data/hotel.js` with the new hotel's details
3. **Update** `src/data/rooms.js`, `services.js`, `testimonials.js`, `faqs.js`
4. **Change** the primary gold color in `tailwind.config.js` if the brand uses a different accent
5. **Replace** placeholder images in `public/images/`
6. **Update** `index.html` meta tags
7. Deploy

The entire customisation should take **under 30 minutes** for an experienced developer, or **1–2 hours** for a beginner following this guide.

---

## Future Enhancement Ideas

- [ ] **Booking calendar** — integrate with Calendly, Booking.com API, or a custom backend
- [ ] **Gallery section** — photo lightbox with masonry grid
- [ ] **Multi-language support** — i18n with `react-i18next` (EN, FR, PT for African markets)
- [ ] **Currency switcher** — ZAR / USD / EUR / GBP
- [ ] **Dark/light mode toggle** — optional light mode variant
- [ ] **Blog / News section** — hotel updates and travel guides
- [ ] **Live availability widget** — channel manager integration
- [ ] **Loyalty programme page** — rewards and membership tiers
- [ ] **Virtual tour** — 360° room viewer with Pannellum
- [ ] **Push notifications** — PWA with service worker for offers

---

## License

This template is provided for commercial use. You may use it for client projects, modify it freely, and deploy it to any number of hotel websites. Attribution is appreciated but not required.

---

*Built with precision for African hospitality. Designed to convert visitors into guests.*
