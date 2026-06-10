import { motion } from 'framer-motion'
import { ChevronDown, Star, MapPin, Eye, CalendarDays } from 'lucide-react'
import { hotelData } from '../../data/hotel'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern"
      aria-label="True Star Hotel hero"
    >
      {/* Teal ambient glow */}
      <div
        className="absolute top-1/3 left-[10%] w-[480px] h-[480px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,164,180,0.14) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-[5%] w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,137,160,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Decorative rings */}
      <div className="absolute top-12 right-8 md:top-20 md:right-20 pointer-events-none" aria-hidden="true">
        <div className="w-48 md:w-80 h-48 md:h-80 rounded-full border border-white/6 absolute" />
        <div className="w-36 md:w-60 h-36 md:h-60 rounded-full border border-white/4 absolute top-6 left-6 md:top-10 md:left-10" />
        <div className="w-24 md:w-40 h-24 md:h-40 rounded-full border border-white/3 absolute top-12 left-12 md:top-20 md:left-20" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,164,180,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,164,180,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-max relative z-10 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-3xl">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Location badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
                <MapPin size={11} />
                {hotelData.city}, {hotelData.country}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-5 text-balance"
            >
              Welcome to<br />
              <span className="text-gradient-gold">True Star</span><br />
              Hotel
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-white/65 text-base md:text-xl leading-relaxed max-w-xl mb-8"
            >
              Your comfort, our priority in the heart of Kumasi. Experience warm Ghanaian hospitality with world-class amenities.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14">
              <button
                onClick={() => scrollTo('booking')}
                className="btn-gold text-base px-8 py-4"
                aria-label="Book your stay"
              >
                <CalendarDays size={18} />
                Book Your Stay
              </button>
              <button
                onClick={() => scrollTo('rooms')}
                className="flex items-center justify-center gap-2 font-body font-medium text-base px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 cursor-pointer"
                aria-label="View our rooms"
              >
                <Eye size={18} />
                View Rooms
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 md:gap-12">
              {hotelData.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-heading text-2xl md:text-3xl text-gold-400">{stat.value}</span>
                  <span className="font-body text-white/50 text-xs md:text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>

        {/* Floating info cards — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 max-w-[210px]"
          aria-hidden="true"
        >
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="font-heading text-2xl text-white">4.8 / 5</p>
            <p className="font-body text-white/50 text-xs mt-0.5">Guest satisfaction</p>
          </div>
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4 shadow-card">
            <p className="font-body text-gold-400 text-xs uppercase tracking-widest mb-1">Call us now</p>
            <a href="tel:0322490140" className="font-heading text-base text-white hover:text-gold-400 transition-colors cursor-pointer">
              {hotelData.phone}
            </a>
            <p className="font-body text-white/50 text-xs mt-0.5">24/7 security</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs uppercase tracking-[0.2em]">Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
