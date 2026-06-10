import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'
import { hotelData } from '../../data/hotel'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'fill-gold-400 text-gold-400' : 'text-cream-700'}
        />
      ))}
    </div>
  )
}

function Avatar({ initials, colorClass }) {
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-md`}
      aria-hidden="true"
    >
      <span className="font-heading text-white text-sm font-bold">{initials}</span>
    </div>
  )
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.article
      key={testimonial.id}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -16 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-dark-400 border border-gold-500/15 rounded-3xl p-8 flex flex-col gap-5 shadow-card"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar initials={testimonial.initials} colorClass={testimonial.color} />
          <div>
            <p className="font-heading text-cream-200 text-sm leading-snug">{testimonial.name}</p>
            <p className="font-body text-cream-600 text-xs mt-0.5">{testimonial.location}</p>
          </div>
        </div>
        <Quote size={24} className="text-gold-500/30 flex-shrink-0" aria-hidden="true" />
      </div>

      {/* Rating + Date */}
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <span className="font-body text-cream-700 text-xs">{testimonial.date}</span>
      </div>

      {/* Review text */}
      <div>
        <h4 className="font-heading text-cream-300 text-base mb-2">{testimonial.title}</h4>
        <p className="font-body text-cream-600 text-sm leading-relaxed">{testimonial.review}</p>
      </div>

      {/* Room type tag */}
      <div className="mt-auto pt-2 border-t border-gold-500/10">
        <span className="font-body text-gold-500/70 text-xs uppercase tracking-wider">
          Stayed in: {testimonial.roomType}
        </span>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const cardsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)
  const visibleTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  const prev = () => setCurrentPage((p) => Math.max(0, p - 1))
  const next = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))

  return (
    <section id="reviews" className="section-padding bg-dark-600">
      <div className="container-max">
        <SectionHeader
          badge="Guest Reviews"
          title="What Our Guests"
          highlight="Are Saying"
          subtitle="Don't just take our word for it — hear from the thousands of guests who have experienced African luxury at its finest."
          align="center"
          className="mb-14"
        />

        {/* Overall rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-12 flex-wrap"
        >
          <div className="text-center">
            <p className="font-heading text-5xl text-gold-400">4.9</p>
            <StarRating rating={5} />
            <p className="font-body text-cream-600 text-xs mt-1">Overall Rating</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gold-500/15" />
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Cleanliness', score: '4.9' },
              { label: 'Location', score: '5.0' },
              { label: 'Service', score: '4.8' },
            ].map(({ label, score }) => (
              <div key={label} className="text-center">
                <p className="font-heading text-xl text-cream-300">{score}</p>
                <p className="font-body text-cream-600 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards — desktop grid / mobile single */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-400 border border-gold-500/12 rounded-3xl p-7 flex flex-col gap-4 hover:border-gold-500/25 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar initials={t.initials} colorClass={t.color} />
                  <div>
                    <p className="font-heading text-cream-200 text-sm leading-snug">{t.name}</p>
                    <p className="font-body text-cream-600 text-xs mt-0.5">{t.location}</p>
                  </div>
                </div>
                <Quote size={20} className="text-gold-500/25 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-between">
                <StarRating rating={t.rating} />
                <span className="font-body text-cream-700 text-xs">{t.date}</span>
              </div>
              <div>
                <h4 className="font-heading text-cream-300 text-sm mb-1.5">{t.title}</h4>
                <p className="font-body text-cream-600 text-sm leading-relaxed line-clamp-4">{t.review}</p>
              </div>
              <div className="mt-auto pt-3 border-t border-gold-500/8">
                <span className="font-body text-gold-500/60 text-xs uppercase tracking-wider">
                  {t.roomType}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <TestimonialCard
              testimonial={testimonials[currentPage]}
              key={testimonials[currentPage].id}
            />
          </AnimatePresence>

          {/* Mobile pagination */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full border border-gold-500/25 flex items-center justify-center text-cream-500 hover:text-gold-400 hover:border-gold-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-200 rounded-full cursor-pointer ${
                    i === currentPage
                      ? 'w-6 h-2 bg-gold-400'
                      : 'w-2 h-2 bg-cream-700 hover:bg-cream-500'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(testimonials.length - 1, p + 1))}
              disabled={currentPage === testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-gold-500/25 flex items-center justify-center text-cream-500 hover:text-gold-400 hover:border-gold-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
