'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
          video.currentTime = 0
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 md:px-10 py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div>
          <motion.p
            className="text-xs tracking-widest uppercase mb-10 font-sans font-medium"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">
            {[
              { text: 'Product-driven' },
              { text: 'software' },
              { text: 'engineer' },
              { text: 'at' },
              { text: 'the' },
              { text: 'intersection' },
              { text: 'of' },
              { text: 'backend' },
              { text: 'systems' },
              { text: 'and' },
              { text: 'AI.' },
              { text: 'Currently' },
              { text: 'building' },
              { text: 'at' },
              { text: 'ClassLink.', em: true },
              { text: 'Previously' },
              { text: 'at' },
              { text: 'Waymo.', em: true },
            ].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                style={{ color: 'var(--color-fg)' }}
                initial={{ opacity: 0.15 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              >
                {word.em ? <em>{word.text}</em> : word.text}
              </motion.span>
            ))}
          </p>
          <motion.p
            className="mt-8 font-sans text-base leading-relaxed font-light"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            MS Computer Science, ML & AI — UT Austin
          </motion.p>
          <motion.p
            className="mt-2 font-sans text-base leading-relaxed font-light"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            BS Computer Science — Lehigh University
          </motion.p>
          <motion.p
            className="mt-8 font-sans text-sm tracking-widest uppercase whitespace-nowrap"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Outside of work — personal finance, Olympic weightlifting, and motorcycles.
          </motion.p>
        </div>

        {/* Right — motorcycle video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-[9/16] max-h-[70vh] mx-auto"
        >
          <div
            ref={tiltRef}
            className="w-full h-full overflow-hidden"
            style={{
              borderRadius: '4px',
              transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
            onMouseMove={(e) => {
              const el = tiltRef.current
              if (!el) return
              const rect = el.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
              setTilt({ x, y })
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{
              maskImage: `
                linear-gradient(to right, transparent, white 15%, white 85%, transparent),
                linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)
              `,
              WebkitMaskImage: `
                linear-gradient(to right, transparent, white 15%, white 85%, transparent),
                linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)
              `,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
            src="/hero-motorcycle.mp4"
            muted
            loop
            playsInline
          />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
