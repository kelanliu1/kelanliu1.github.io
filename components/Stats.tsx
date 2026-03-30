'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Years experience', sub: 'Full-time & internships' },
  { value: 'AWS', label: 'Certified Developer', sub: 'Associate level' },
  { value: 'BS · MS', label: 'Education', sub: 'Lehigh · UT Austin' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="px-6 md:px-8 py-10 md:py-12 flex flex-col gap-2"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="font-serif text-4xl md:text-5xl">
              {stat.value}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--muted)' }}
            >
              {stat.label}
            </span>
            <span className="text-xs mt-1" style={{ color: 'var(--color-accent)' }}>
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
