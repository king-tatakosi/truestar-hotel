import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { faqs } from '../../data/faqs'
import { hotelData } from '../../data/hotel'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`
        border rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen
          ? 'border-gold-500/35 bg-dark-300 shadow-gold-sm'
          : 'border-gold-500/10 bg-dark-400 hover:border-gold-500/25'
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
      >
        <span className={`
          font-body text-sm md:text-base font-medium leading-snug transition-colors duration-200
          ${isOpen ? 'text-gold-400' : 'text-cream-300 group-hover:text-cream-200'}
        `}>
          {faq.question}
        </span>
        <span className={`
          w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-200
          ${isOpen
            ? 'bg-gold-500/20 text-gold-400'
            : 'bg-dark-300 text-cream-500 group-hover:bg-gold-500/10 group-hover:text-gold-500'
          }
        `}>
          {isOpen
            ? <Minus size={14} />
            : <Plus size={14} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-question-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 border-t border-gold-500/10">
              <p className="font-body text-cream-500 text-sm leading-relaxed pt-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="section-padding bg-dark-600">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <SectionHeader
              badge="FAQ"
              title="Common"
              highlight="Questions"
              subtitle="Everything you need to know before your stay. Can't find your answer? Reach out to us directly."
              align="left"
              className="mb-8"
            />

            <div className="space-y-3">
              <a
                href={`https://wa.me/${hotelData?.whatsapp || '27110000000'}?text=Hello, I have a question about Savanna Grand Hotel.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-green-900/20 border border-green-700/25 hover:bg-green-900/35 transition-all duration-200 group cursor-pointer"
                aria-label="Ask a question on WhatsApp"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/35 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-400" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-green-300 text-sm font-semibold">Still have a question?</p>
                  <p className="font-body text-green-400/60 text-xs">Message us on WhatsApp</p>
                </div>
              </a>

              <a
                href={`tel:${hotelData?.phone || '+27 11 000 0000'}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-gold-500/8 border border-gold-500/15 hover:bg-gold-500/15 transition-all duration-200 group cursor-pointer"
                aria-label="Call us directly"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/25 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="text-gold-400" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-gold-300 text-sm font-semibold">Call Us Directly</p>
                  <p className="font-body text-gold-500/60 text-xs">{hotelData?.phone || '+27 11 000 0000'}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div
            className="lg:col-span-3 space-y-3"
            role="list"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, i) => (
              <div key={faq.id} role="listitem">
                <FAQItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                  index={i}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

