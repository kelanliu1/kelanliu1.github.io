'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Cloud & Infra',
    items: ['AWS', 'GCP', 'Docker', 'Linux', 'Redis', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Angular', 'Node.js', 'Flask', 'FastAPI', 'Django', 'D3.js', 'RxJS'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'Claude Code'],
  },
]

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs tracking-widest uppercase mb-16 font-sans font-medium"
          style={{ color: 'var(--color-accent)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-6 font-medium"
                style={{ color: 'var(--muted)' }}
              >
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 font-light transition-all duration-200"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--color-fg)',
                      borderRadius: '2px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)'
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(232, 201, 126, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
