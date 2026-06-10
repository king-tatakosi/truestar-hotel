import { motion } from 'framer-motion'
import {
  Wifi, AirVent, Tv, Coffee, Bath, ParkingSquare,
  Utensils, Wine, ConciergeBell, BedDouble,
  Users, Maximize2, CalendarDays, Star
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { rooms } from '../../data/rooms'
import { hotelData } from '../../data/hotel'

const iconMap = {
  Wifi, AirVent, Tv, Coffee, Bath, ParkingSquare,
  Utensils, Wine, ConciergeBell, BedDouble,
}

const roomAccentColors = {
  standard: 'from-stone-900 via-amber-950/80 to-dark-400',
  deluxe: 'from-amber-900/60 via-yellow-950 to-dark-300',
  suite: 'from-dark-100/80 via-amber-950/60 to-dark-200',
}

const roomBorderColors = {
  standard: 'border-gold-500/10',
  deluxe: 'border-gold-500/30',
  suite: 'border-gold-500/15',
}

const roomIconColors = {
  standard: 'text-cream-600',
  deluxe: 'text-gold-400',
  suite: 'text-gold-300',
}

function RoomCard({ room, index }) {
  const GradientClass = roomAccentColors[room.type] || roomAccentColors.standard

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      className={`
        relative bg-dark-400 rounded-3xl overflow-hidden flex flex-col
        border ${roomBorderColors[room.type]}
        hover:shadow-card-hover transition-all duration-400 group
        hover:-translate-y-1
      `}
    >
      {/* Featured badge */}
      {room.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-gold-500 text-dark-700 text-xs font-body font-bold px-3 py-1.5 rounded-full shadow-gold-sm">
          <Star size={10} className="fill-dark-700" />
          Most Popular
        </div>
      )}

      {/* Room Image Placeholder */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        {room.imageUrl ? (
          <img
            src={room.imageUrl}
            alt={`${room.name} at ${hotelData?.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${GradientClass}`}>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <BedDouble size={64} className="text-gold-400" strokeWidth={0.8} />
            </div>
            <div className="absolute bottom-4 right-4 text-right">
              <p className="font-body text-cream-700 text-xs">Add room photo</p>
              <p className="font-body text-cream-700 text-xs">800×520px</p>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/20 to-transparent" />

        {/* Price tag */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="font-body text-cream-700 text-xs uppercase tracking-wider">From</span>
          <p className="font-heading text-gold-400 text-xl leading-none">
            {room.currency} {room.price.toLocaleString()}
            <span className="font-body text-cream-600 text-xs font-normal">/{room.priceLabel.replace('per ', '')}</span>
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Room meta */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 font-body text-cream-600 text-xs">
            <Maximize2 size={11} className="text-gold-500" /> {room.size}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-cream-600 text-xs">
            <Users size={11} className="text-gold-500" /> {room.capacity}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-cream-600 text-xs">
            <BedDouble size={11} className="text-gold-500" /> {room.bedType}
          </span>
        </div>

        <h3 className="font-heading text-xl text-cream-200 mb-2 leading-snug">{room.name}</h3>
        <p className="font-body text-cream-600 text-sm leading-relaxed mb-5 flex-1">{room.description}</p>

        {/* Amenities */}
        <ul className="grid grid-cols-2 gap-2 mb-6" aria-label={`${room.name} amenities`}>
          {room.amenities.slice(0, 4).map((amenity) => {
            const Icon = iconMap[amenity.icon]
            return (
              <li
                key={amenity.label}
                className="flex items-center gap-2 font-body text-xs text-cream-500"
              >
                {Icon && <Icon size={12} className={roomIconColors[room.type]} />}
                {amenity.label}
              </li>
            )
          })}
        </ul>

        {/* Availability CTA */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              const el = document.getElementById('booking')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
            className="btn-gold flex-1 py-2.5 text-sm"
            aria-label={`Book ${room.name}`}
          >
            <CalendarDays size={14} />
            Book Now
          </button>
          {!room.available && (
            <span className="inline-flex items-center px-3 py-2 rounded-xl bg-red-900/30 border border-red-800/40 text-red-400 text-xs font-body">
              Fully Booked
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Rooms() {
  return (
    <section id="rooms" className="section-padding bg-dark-600">
      <div className="container-max">
        <SectionHeader
          badge="Accommodation"
          title="Our Premium"
          highlight="Rooms & Suites"
          subtitle="Each room is a sanctuary of comfort, designed with warm African aesthetics and fitted with every modern amenity for an exceptional stay."
          align="center"
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* Call to action below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-cream-600 text-sm mb-4">
            Looking for something specific? Our reservations team is available 24/7.
          </p>
          <a
            href={`https://wa.me/${hotelData.whatsapp}?text=${encodeURIComponent("Hello, I'd like more information about your rooms.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex text-sm px-6 py-2.5"
            aria-label="Contact us on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
