'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Magnetic from './Magnetic'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-36 px-6 md:px-10"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div className="max-w-2xl">
          <motion.p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get in touch
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Let&apos;s build<br />
            <em>something together.</em>
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-col gap-4 shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Magnetic>
            <a
              href="mailto:kelanliu01@gmail.com"
              className="text-xs tracking-widest uppercase px-8 py-4 text-center transition-opacity duration-200 hover:opacity-80 block"
              style={{
                background: 'var(--color-fg)',
                color: 'var(--color-bg)',
                borderRadius: '2px',
              }}
            >
              Send an email
            </a>
          </Magnetic>
          <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
            kelanliu01@gmail.com
          </p>
          <Magnetic>
            <a
              href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-8 py-4 text-center transition-all duration-200"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--color-fg)',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-fg)'
              e.currentTarget.style.color = 'var(--color-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-fg)'
            }}
          >
              Download resume
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Large wordmark */}
      <motion.div
        className="max-w-7xl mx-auto mt-28"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p
          className="font-serif leading-none select-none"
          style={{
            fontSize: 'clamp(4rem, 15vw, 14rem)',
            color: 'var(--border)',
            letterSpacing: '-0.02em',
          }}
        >
          Kelan.
        </p>
      </motion.div>
    </section>
  )
}
