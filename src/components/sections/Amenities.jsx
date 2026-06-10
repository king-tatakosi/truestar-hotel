import { motion } from 'framer-motion'
import {
  Waves, Wifi, UtensilsCrossed, Wine,
  ConciergeBell, AirVent, ParkingSquare, BedDouble,
  Tv, Presentation, Users, ShoppingBag,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { amenities } from '../../data/services'

const iconMap = {
  Waves, Wifi, UtensilsCrossed, Wine,
  ConciergeBell, AirVent, ParkingSquare, BedDouble,
  Tv, Presentation, Users, ShoppingBag,
}

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-dark-600">
      <div className="container-max">
        <SectionHeader
          badge="Hotel Amenities"
          title="Everything You Need,"
          highlight="All in One Place"
          subtitle="True Star Hotel is equipped with premium facilities to make your stay as comfortable and enjoyable as possible."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((item, i) => {
            const Icon = iconMap[item.icon] || BedDouble
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="
                  group flex flex-col items-center text-center gap-3
                  bg-dark-400 border border-gold-500/10 rounded-2xl p-6
                  hover:border-gold-500/30 hover:bg-dark-300
                  hover:-translate-y-1 hover:shadow-card
                  transition-all duration-300 cursor-default
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/12 group-hover:bg-gold-500/20 flex items-center justify-center transition-colors duration-200">
                  <Icon size={26} className="text-gold-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-cream-200 text-sm leading-snug mb-1">{item.title}</h3>
                  <p className="font-body text-cream-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
