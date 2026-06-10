const variants = {
  gold: 'bg-gold-500 hover:bg-gold-400 text-dark-700 shadow-gold-sm hover:shadow-gold',
  outline: 'border border-gold-500/40 hover:border-gold-500/70 text-cream-200 hover:bg-gold-500/10',
  ghost: 'text-gold-400 hover:text-gold-300 hover:bg-gold-500/10',
  danger: 'bg-red-800 hover:bg-red-700 text-cream-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2',
  xl: 'px-10 py-5 text-lg rounded-2xl gap-2.5',
}

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  onClick,
  href,
  target,
  fullWidth = false,
  ...props
}) {
  const base = `
    inline-flex items-center justify-center font-body font-semibold
    transition-all duration-200 cursor-pointer
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  if (href) {
    return (
      <a href={href} target={target} className={base} {...props}>
        {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16} />}
      </a>
    )
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick} {...props}>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16} />}
    </button>
  )
}
