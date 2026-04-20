'use client'
import { motion } from 'framer-motion'

interface FlipButtonProps {
  text1: string
  text2: string
  href?: string
  className?: string
  primary?: boolean
}

export default function FlipButton({ text1, text2, href, className = "", primary = true }: FlipButtonProps) {
  const baseClass = primary
    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-purple-500/60 shadow-xl shadow-purple-200/60'
    : 'bg-white text-gray-900 border border-gray-200 shadow-md shadow-gray-100'

  const sharedClass = `group inline-flex w-full sm:w-auto min-w-[260px] md:min-w-[290px] items-center justify-center rounded-2xl px-12 py-5 text-center ${baseClass} ${className}`

  const content = (
    <span className="text-[20px] font-extrabold tracking-tight leading-none">{text1}</span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={sharedClass}
        aria-label={text2}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={sharedClass}
      aria-label={text2}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {content}
    </motion.button>
  )
}
