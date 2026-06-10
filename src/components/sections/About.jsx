import { motion } from 'framer-motion'
import { CheckCircle2, Building2, Users, Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { hotelData } from '../../data/hotel'

const trustBadges = [
  { icon: Users, label: 'Friendly Staff', sub: '100+ Team Members' },
  { icon: Star, label: 'Top Rated', sub: '4.8 Guest Rating' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-700">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-h-[520px] rounded-3xl overflow-hidden border border-gold-500/20 shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-400 to-dark-200" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gold-500/15 flex items-center justify-center">
                  <Building2 size={36} className="text-gold-500" />
                </div>
                <div className="text-center px-8">
                  <p className="font-heading text-cream-300 text-lg mb-1">{hotelData.name}</p>
                </div>
              </div>
              <div className="absolute inset-4 border border-gold-500/8 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-600/60 to-transparent" />
            </div>

            {/* Floating small card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-6 sm:-left-10 w-36 h-28 rounded-2xl overflow-hidden border border-gold-500/20 shadow-card bg-dark-300 hidden sm:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-dark-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-body text-cream-600 text-xs text-center px-2">Pool area photo</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <SectionHeader
              badge="About Us"
              title="Kumasi's Favourite"
              highlight="Hotel"
              align="left"
              className="mb-8"
            />

            <p className="font-body text-cream-600 text-base leading-relaxed mb-4">
              {hotelData.description}
            </p>
            <p className="font-body text-cream-600 text-base leading-relaxed mb-8">
               We have been the trusted choice for visitors to Kumasi — whether for business, leisure, or special occasions. Our team is dedicated to one thing: making you feel at home.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10" role="list" aria-label="Hotel highlights">
              {hotelData.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-cream-400 text-sm">
                  <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3" role="list">
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  role="listitem"
                  className="bg-dark-400 border border-gold-500/12 rounded-xl p-4 text-center group hover:border-gold-500/30 transition-colors duration-200"
                >
                  <Icon size={20} className="text-gold-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="font-body text-cream-300 text-xs font-semibold leading-tight">{label}</p>
                  <p className="font-body text-cream-700 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {hotelData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-dark-400 border border-gold-500/10 rounded-2xl p-6 text-center hover:border-gold-500/25 transition-colors duration-300"
            >
              <p className="font-heading text-3xl md:text-4xl text-gold-400 mb-1">{stat.value}</p>
              <p className="font-body text-cream-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
