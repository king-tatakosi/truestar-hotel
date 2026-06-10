import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, CalendarDays, Users, BedDouble } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { hotelData } from '../../data/hotel'

const roomOptions = [
  { value: '', label: 'Any room type' },
  { value: 'standard',  label: 'Standard Room (GHS 350/night)' },
  { value: 'superior',  label: 'Superior Room (GHS 500/night)' },
  { value: 'executive', label: 'Executive Room (GHS 750/night)' },
  { value: 'suite',     label: 'Presidential Suite (GHS 1,200/night)' },
]

const inputClass =
  'w-full bg-dark-500 border border-gold-500/15 rounded-xl px-4 py-3 ' +
  'font-body text-sm text-cream-200 placeholder:text-cream-700 ' +
  'focus:outline-none focus:border-gold-500/50 focus:bg-dark-400 ' +
  'hover:border-gold-500/25 transition-all duration-200'

const emptyForm = {
  name: '', phone: '',
  checkIn: '', checkOut: '',
  guests: '1', roomType: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  const selectedRoom = roomOptions.find(r => r.value === form.roomType)

  return (
    <section id="contact" className="section-padding bg-dark-700">
      <div className="container-max">
        <SectionHeader
          badge="Contact Us"
          title="Get In Touch or"
          highlight="Make a Booking"
          subtitle="Reach out by phone, WhatsApp, or fill in the form below and we'll get back to you shortly."
          align="center"
          className="mb-14"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Call button */}
            <a
              href={`tel:${hotelData.phoneRaw}`}
              className="flex items-center gap-4 w-full p-4 rounded-2xl bg-gold-500/12 border border-gold-500/25 hover:bg-gold-500/20 hover:border-gold-500/50 transition-all duration-200 group cursor-pointer"
              aria-label={`Call True Star Hotel at ${hotelData.phone}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                <Phone size={20} className="text-gold-400" />
              </div>
              <div>
                <p className="font-body font-semibold text-gold-300 text-base leading-tight">{hotelData.phone}</p>
                <p className="font-body text-gold-500/60 text-xs mt-0.5">Tap to call us directly</p>
              </div>
            </a>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${hotelData.whatsapp}?text=${encodeURIComponent(hotelData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-4 rounded-2xl bg-green-900/30 border border-green-700/30 hover:bg-green-900/50 hover:border-green-600/50 transition-all duration-200 group cursor-pointer"
              aria-label="Chat with True Star Hotel on WhatsApp"
            >
              <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/35 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-body font-semibold text-green-300 text-base leading-tight">WhatsApp Chat</p>
                <p className="font-body text-green-400/60 text-xs mt-0.5">Instant reply guaranteed</p>
              </div>
            </a>

            {/* Address & Hours */}
            <div className="bg-dark-400 border border-gold-500/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-gold-500" />
                </div>
                <div>
                  <p className="font-body text-cream-500 text-xs uppercase tracking-wider mb-0.5">Address</p>
                  <address className="font-body text-cream-300 text-sm not-italic leading-relaxed">
                    {hotelData.address}<br />
                    {hotelData.city}, {hotelData.country}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-gold-500" />
                </div>
                <div>
                  <p className="font-body text-cream-500 text-xs uppercase tracking-wider mb-0.5">Check-in / Out</p>
                  <p className="font-body text-cream-300 text-sm">
                    Check-in: {hotelData.checkIn} • Check-out: {hotelData.checkOut}
                  </p>
                  <p className="font-body text-gold-500/70 text-xs mt-0.5">Reception open 24/7</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-gold-500/15 h-52 relative">
              {hotelData.googleMapsUrl ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.350176059504!2d-1.5665195896867008!3d6.72705852073682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb959f4cc21553%3A0x4998f289eb70e3cf!2sTrue%20Star%20Hotel!5e0!3m2!1sen!2sgh!4v1781016338678!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map: ${hotelData.name}, ${hotelData.city}`}
                />
              ) : (
                <div className="absolute inset-0 bg-dark-300 flex flex-col items-center justify-center gap-2">
                  <MapPin size={28} className="text-gold-500/40" />
                  <p className="font-body text-cream-600 text-xs text-center px-4">
                    Set <code className="text-gold-500/70">googleMapsUrl</code> in{' '}
                    <code className="text-gold-500/70">src/data/hotel.js</code>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Booking / Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-400 border border-gold-500/15 rounded-3xl p-7 md:p-9 h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-cream-200 mb-2">Booking Request Received!</h3>
                    <p className="font-body text-cream-600 text-sm max-w-xs">
                      Thank you, {form.name}! We'll call you back on{' '}
                      <strong className="text-cream-400">{form.phone}</strong> to confirm your reservation.
                    </p>
                    {(form.checkIn || form.roomType) && (
                      <div className="mt-4 bg-gold-500/8 border border-gold-500/15 rounded-xl px-4 py-3 text-left space-y-1 text-sm">
                        {form.checkIn  && <p className="font-body text-cream-500">Check-in: <span className="text-cream-300">{form.checkIn}</span></p>}
                        {form.checkOut && <p className="font-body text-cream-500">Check-out: <span className="text-cream-300">{form.checkOut}</span></p>}
                        {form.guests   && <p className="font-body text-cream-500">Guests: <span className="text-cream-300">{form.guests}</span></p>}
                        {selectedRoom?.value && <p className="font-body text-cream-500">Room: <span className="text-cream-300">{selectedRoom.label}</span></p>}
                      </div>
                    )}
                  </div>
                  <p className="font-body text-cream-600 text-sm">
                    Or call us directly:{' '}
                    <a href={`tel:${hotelData.phoneRaw}`} className="text-gold-400 hover:text-gold-300 cursor-pointer">
                      {hotelData.phone}
                    </a>
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(emptyForm) }}
                    className="btn-outline text-sm px-5 py-2"
                  >
                    New Booking
                  </button>
                </motion.div>
              ) : (
                <form id="booking" onSubmit={handleSubmit} aria-label="Booking form">
                  <h3 className="font-heading text-xl text-cream-200 mb-2 flex items-center gap-2">
                    <MessageSquare size={18} className="text-gold-500" />
                    Book Your Stay
                  </h3>
                  <p className="font-body text-cream-600 text-sm mb-7">
                    Fill in your details and we'll call you back to confirm your reservation.
                  </p>

                  <div className="space-y-5">

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. 024 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Check-in / Check-out */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="checkIn" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                          <CalendarDays size={11} className="inline mr-1 -mt-0.5" />
                          Check-in
                        </label>
                        <input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={form.checkIn}
                          onChange={handleChange}
                          min={today}
                          className={`${inputClass} [color-scheme:light]`}
                        />
                      </div>
                      <div>
                        <label htmlFor="checkOut" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                          <CalendarDays size={11} className="inline mr-1 -mt-0.5" />
                          Check-out
                        </label>
                        <input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={form.checkOut}
                          onChange={handleChange}
                          min={form.checkIn || today}
                          className={`${inputClass} [color-scheme:light]`}
                        />
                      </div>
                    </div>

                    {/* Guests / Room type */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="guests" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                          <Users size={11} className="inline mr-1 -mt-0.5" />
                          Guests
                        </label>
                        <input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="20"
                          value={form.guests}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="roomType" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                          <BedDouble size={11} className="inline mr-1 -mt-0.5" />
                          Room Type
                        </label>
                        <select
                          id="roomType"
                          name="roomType"
                          value={form.roomType}
                          onChange={handleChange}
                          className={`${inputClass} cursor-pointer`}
                        >
                          {roomOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-body text-cream-500 text-xs uppercase tracking-wider mb-1.5">
                        Message <span className="text-gold-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Any special requests or questions for us?"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading || !form.name || !form.phone || !form.message}
                      className="btn-gold w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Booking Request
                        </>
                      )}
                    </button>

                    <p className="font-body text-cream-700 text-xs text-center">
                      Prefer to call?{' '}
                      <a href={`tel:${hotelData.phoneRaw}`} className="text-gold-500 hover:text-gold-400 cursor-pointer">
                        {hotelData.phone}
                      </a>{' '}
                      — we're available 24/7.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
