import { motion } from 'framer-motion'
import {
  UtensilsCrossed, CalendarDays, Presentation,
  Waves, Car, BedDouble, ArrowRight
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

const iconMap = {
  UtensilsCrossed,
  CalendarDays,
  Presentation,
  Waves,
  Car,
  BedDouble,
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || BedDouble

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`
        relative group flex flex-col p-6 rounded-2xl
        border transition-all duration-300 cursor-default
        ${service.highlight
          ? 'bg-gradient-to-br from-gold-500/15 via-dark-300 to-dark-400 border-gold-500/35 shadow-gold'
          : 'bg-dark-400 border-gold-500/10 hover:border-gold-500/25'
        }
        hover:shadow-card-hover hover:-translate-y-1
      `}
    >
      {service.highlight && (
        <span className="absolute top-4 right-4 text-xs font-body font-semibold text-gold-400 bg-gold-500/15 border border-gold-500/25 px-2.5 py-1 rounded-full">
          Featured
        </span>
      )}

      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-200
        ${service.highlight
          ? 'bg-gold-500/20 group-hover:bg-gold-500/30'
          : 'bg-gold-500/10 group-hover:bg-gold-500/18'
        }
      `}>
        <Icon
          size={22}
          className={service.highlight ? 'text-gold-300' : 'text-gold-500'}
          aria-hidden="true"
        />
      </div>

      <h3 className="font-heading text-lg text-cream-200 mb-2 leading-snug">{service.title}</h3>
      <p className="font-body text-cream-600 text-sm leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="space-y-1.5 mb-5" aria-label={`${service.title} features`}>
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2 font-body text-xs text-cream-500">
            <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Learn more link */}
      <button
        onClick={() => {
          const el = document.getElementById('contact')
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
        }}
        className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-gold-500 hover:text-gold-400 transition-colors duration-200 cursor-pointer group/btn mt-auto"
        aria-label={`Enquire about ${service.title}`}
      >
        Enquire Now
        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-700">
      <div className="container-max">
        <SectionHeader
          badge="What We Offer"
          title="World-Class"
          highlight="Services"
          subtitle="From intimate dining to grand celebrations, Savanna Grand delivers excellence across every service we provide."
          align="center"
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-body text-cream-700 text-sm mt-10"
        >
          All services available to in-house guests and external bookings. Contact us for bespoke packages.
        </motion.p>
      </div>
    </section>
  )
}
