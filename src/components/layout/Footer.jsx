import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink, Heart, CalendarDays } from 'lucide-react'
import { hotelData } from '../../data/hotel'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Fine Dining', href: '#amenities' },
  { label: 'Events & Weddings', href: '#amenities' },
  { label: 'Conference Centre', href: '#amenities' },
  { label: 'Swimming Pool', href: '#amenities' },
  { label: 'Airport Transfers', href: '#amenities' },
  { label: '24/7 Security', href: '#amenities' },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterXIcon,
}

function FooterLink({ href, children }) {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="font-body text-white/50 hover:text-gold-400 transition-colors duration-200 text-sm leading-relaxed cursor-pointer inline-flex items-center gap-1 group"
      >
        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-gold-400">›</span>
        {children}
      </a>
    </li>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-gold-500/10">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-dark-200 via-dark-100 to-dark-200 border-b border-gold-500/15">
        <div className="container-max py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-white mb-1">
                Ready for an Unforgettable Stay?
              </h3>
              <p className="font-body text-white/55 text-sm">
                Secure your reservation today and experience Ghanaian hospitality.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('booking')
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
              }}
              className="btn-gold flex-shrink-0 px-8 py-3.5"
            >
              <CalendarDays size={16} />
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-sm">
                <span className="font-heading font-bold text-white text-sm">{hotelData.initials}</span>
              </div>
              <div>
                <p className="font-heading text-white text-base leading-none">{hotelData.name}</p>
                <p className="font-body text-gold-400 text-xs tracking-widest uppercase mt-0.5">{hotelData.type}</p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              {hotelData.description.substring(0, 120)}...
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {Object.entries(hotelData.socialLinks).map(([platform, url]) => {
                const SocialIcon = socialComponents[platform]
                const label = platform.charAt(0).toUpperCase() + platform.slice(1)
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/45 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-200 cursor-pointer"
                    aria-label={`Follow us on ${label}`}
                  >
                    {SocialIcon ? <SocialIcon /> : <ExternalLink size={14} />}
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-white/90 text-base mb-5 flex items-center gap-2">
              Quick Links
              <span className="h-px flex-1 bg-white/15" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <FooterLink key={link.href + link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-white/90 text-base mb-5 flex items-center gap-2">
              Our Services
              <span className="h-px flex-1 bg-white/15" />
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-white/90 text-base mb-5 flex items-center gap-2">
              Contact Us
              <span className="h-px flex-1 bg-white/15" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${hotelData.phone}`}
                  className="flex items-start gap-3 text-white/50 hover:text-white/80 transition-colors duration-200 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-lg bg-gold-500/15 group-hover:bg-gold-500/25 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={14} className="text-gold-400" />
                  </span>
                  <span className="font-body text-sm leading-relaxed pt-1">{hotelData.phone}</span>
                </a>
              </li>
              {hotelData.email && (
                <li>
                  <a
                    href={`mailto:${hotelData.email}`}
                    className="flex items-start gap-3 text-white/50 hover:text-white/80 transition-colors duration-200 group cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-lg bg-gold-500/15 group-hover:bg-gold-500/25 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail size={14} className="text-gold-400" />
                    </span>
                    <span className="font-body text-sm leading-relaxed pt-1 break-all">{hotelData.email}</span>
                  </a>
                </li>
              )}
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <span className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-gold-400" />
                  </span>
                  <address className="font-body text-sm leading-relaxed not-italic pt-1">
                    {hotelData.address},<br />
                    {hotelData.city}, {hotelData.country}
                  </address>
                </div>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-2">Reception Hours</p>
              <p className="font-body text-white/75 text-sm">Check-in: {hotelData.checkIn}</p>
              <p className="font-body text-white/75 text-sm">Check-out: {hotelData.checkOut}</p>
              <p className="font-body text-gold-400/80 text-xs mt-1">Front desk open 24/7</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-max py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/30 text-xs text-center sm:text-left">
              © {currentYear} {hotelData.name} {hotelData.type}. All rights reserved.
            </p>
            <p className="font-body text-white/30 text-xs flex items-center gap-1">
              Built with <Heart size={11} className="text-gold-500 fill-gold-500 mx-0.5" /> in Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
