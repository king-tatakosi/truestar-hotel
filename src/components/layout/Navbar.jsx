import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, CalendarDays } from 'lucide-react'
import { hotelData } from '../../data/hotel'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleNavClick = useCallback((href) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const navHeight = 80
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-500/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-gold-500/10'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="Go to homepage"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-sm group-hover:shadow-gold transition-shadow duration-200">
                <span className="font-heading font-bold text-dark-700 text-sm leading-none">
                  {hotelData.initials}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading text-cream-200 text-base leading-none">
                  {hotelData.name}
                </p>
                <p className="font-body text-gold-500 text-xs tracking-widest uppercase mt-0.5">
                  {hotelData.type}
                </p>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1" role="list">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  role="listitem"
                  className={`relative px-3 py-2 text-sm font-body font-medium transition-colors duration-200 cursor-pointer rounded-lg ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-gold-400'
                      : 'text-cream-500 hover:text-cream-200'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href={`tel:${hotelData.phone}`}
                className="hidden md:flex items-center gap-1.5 text-cream-500 hover:text-gold-400 transition-colors duration-200 font-body text-sm cursor-pointer"
                aria-label={`Call us at ${hotelData.phone}`}
              >
                <Phone size={14} />
                <span className="hidden lg:inline">{hotelData.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('#booking')}
                className="hidden sm:flex items-center gap-2 btn-gold text-sm px-4 py-2.5 rounded-lg"
                aria-label="Book a room"
              >
                <CalendarDays size={15} />
                Book Now
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden mr-2 w-10 h-10 flex items-center justify-center rounded-xl border border-gold-500/20 text-cream-300 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200 cursor-pointer"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-dark-400 border-l border-gold-500/15 z-50 lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold-500/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center">
                    <span className="font-heading font-bold text-dark-700 text-xs">{hotelData.initials}</span>
                  </div>
                  <span className="font-heading text-cream-200 text-sm">{hotelData.name}</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-cream-500 hover:text-cream-200 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm transition-all duration-200 cursor-pointer ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-gold-500/15 text-gold-400 font-semibold'
                        : 'text-cream-400 hover:text-cream-200 hover:bg-dark-300'
                    }`}
                  >
                    {activeSection === link.href.replace('#', '') && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    )}
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-4 py-6 border-t border-gold-500/10 space-y-3">
                <button
                  onClick={() => handleNavClick('#booking')}
                  className="btn-gold w-full"
                >
                  <CalendarDays size={16} />
                  Book Your Stay
                </button>
                <a
                  href={`tel:${hotelData.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-cream-700/30 text-cream-500 hover:text-cream-200 hover:border-cream-600/40 transition-all duration-200 font-body text-sm cursor-pointer"
                >
                  <Phone size={14} />
                  {hotelData.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
