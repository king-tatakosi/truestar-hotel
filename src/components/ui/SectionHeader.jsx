import { motion } from 'framer-motion'

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignClass[align]} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/8 text-gold-400 text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow" />
          {badge}
        </span>
      )}

      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream-200 leading-tight text-balance">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-gold">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="font-body text-cream-600 text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      <div className={`gold-divider ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
