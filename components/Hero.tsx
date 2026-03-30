'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Magnetic from './Magnetic'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">

      {/* Headshot — right side */}
      <motion.div
        className="absolute right-0 top-0 h-full flex items-end justify-end pb-12 pr-4 md:pr-[12%]"
        style={{ zIndex: 1, y: imgY }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <div
          className="relative"
          style={{ height: 'calc(100vh - 120px)' }}
        >
          <img
            src="/headshot.jpg"
            alt="Kelan Liu"
            className="h-full w-auto object-contain"
            style={{
              maskImage: 'radial-gradient(ellipse 55% 55% at 55% 50%, white 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at 55% 50%, white 50%, transparent 100%)',
            }}
          />

          {/* Edge fades */}
          <div
            className="absolute inset-y-0 -left-4 w-[40%] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0c0b09 0%, #0c0b09 20%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-y-0 -right-4 w-[30%] pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #0c0b09 0%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #0c0b09 0%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #0c0b09 0%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* Text — positioned over everything */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex items-end">
        <div className="pb-10 md:pb-24">
          <motion.p
            className="text-xs tracking-widest uppercase mb-4 md:mb-8"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Software Engineer — New York
          </motion.p>
          <motion.h1
            className="font-serif text-5xl md:text-8xl leading-[1.0] mb-4 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kelan<br />Liu
          </motion.h1>
          <motion.p
            className="hidden md:block text-lg font-light max-w-xl leading-relaxed mb-10"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Scaling backend systems, grounded in AI/ML.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 md:gap-8 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Magnetic>
              <a
                href="#experience"
                className="text-xs tracking-widest uppercase px-6 py-3 md:px-8 md:py-4 transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: 'var(--color-fg)',
                  color: 'var(--color-bg)',
                  borderRadius: '2px',
                }}
              >
                View experience
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#about"
                className="text-xs tracking-widest uppercase transition-colors duration-200 link-underline"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                About me →
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
