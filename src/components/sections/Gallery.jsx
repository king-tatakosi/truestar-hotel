import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Image } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const galleryItems = [
  { id: 1, label: 'Hotel Exterior',    sub: 'Street-facing façade',  gradient: 'from-red-950/60 via-dark-300 to-dark-400',       span: 'md:col-span-2 md:row-span-2' },
  { id: 2, label: 'Swimming Pool',     sub: 'Outdoor pool area',     gradient: 'from-teal-900/50 via-dark-400 to-dark-300',       span: '' },
  { id: 3, label: 'Hotel Lobby',       sub: 'Welcome & reception',   gradient: 'from-amber-900/40 via-dark-400 to-dark-300',      span: '' },
  { id: 4, label: 'Standard Room',     sub: 'Comfortable & modern',  gradient: 'from-dark-200/70 via-red-950/30 to-dark-400',     span: '' },
  { id: 5, label: 'Restaurant',        sub: 'Fine dining & cuisine',  gradient: 'from-orange-900/40 via-dark-300 to-dark-400',     span: 'md:col-span-2' },
  { id: 6, label: 'Bar & Lounge',      sub: 'Cocktails & relaxation', gradient: 'from-purple-900/40 via-dark-400 to-dark-300',    span: '' },
  { id: 7, label: 'Superior Room',     sub: 'King bed & amenities',   gradient: 'from-red-900/30 via-dark-300 to-dark-400',       span: '' },
  { id: 8, label: 'Hotel Garden',      sub: 'Lush outdoor space',     gradient: 'from-emerald-900/40 via-dark-400 to-dark-300',   span: '' },
  { id: 9, label: 'Presidential Suite',sub: 'Ultimate luxury',        gradient: 'from-gold-900/30 via-dark-200/60 to-dark-300',   span: '' },
]

function GalleryCard({ item, index, onClick }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={() => onClick(item)}
      className={`
        group relative overflow-hidden rounded-2xl cursor-pointer
        border border-gold-500/10 hover:border-gold-500/30
        transition-all duration-300 hover:shadow-card
        ${item.span}
      `}
      style={{ minHeight: '180px' }}
      aria-label={`View ${item.label}`}
    >
      {/* Placeholder background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500`} />

      {/* Image icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-20 transition-opacity">
        <Image size={48} className="text-gold-300" strokeWidth={0.8} />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-dark-100/0 group-hover:bg-dark-100/55 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-100/90 to-transparent">
        <p className="font-heading text-white text-sm leading-tight">{item.label}</p>
        <p className="font-body text-white/65 text-xs mt-0.5">{item.sub}</p>
      </div>
    </motion.button>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-dark-700">
      <div className="container-max">
        <SectionHeader
          badge="Photo Gallery"
          title="See True Star"
          highlight="Up Close"
          subtitle="Take a visual tour of our facilities — rooms, pool, restaurant, garden, and more."
          align="center"
          className="mb-14"
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onClick={setSelected} />
          ))}
        </div>
        
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing: ${selected.label}`}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-gold-500/20"
            >
              <div className={`w-full h-80 bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                <div className="text-center">
                  <Image size={56} className="text-gold-400/30 mx-auto mb-3" strokeWidth={0.8} />
                  <p className="font-heading text-cream-300 text-lg">{selected.label}</p>
                  <p className="font-body text-cream-600 text-sm mt-1">{selected.sub}</p>
                  <p className="font-body text-cream-700 text-xs mt-3">Add image: public/images/gallery/{selected.label.toLowerCase().replace(/ /g, '-')}.jpg</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
