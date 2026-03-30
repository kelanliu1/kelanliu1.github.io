'use client'

import { useEffect, useState } from 'react'
import Magnetic from './Magnetic'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(12, 11, 9, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-end">
        <Magnetic>
        <a
          href="#contact"
          className="text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
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
          Contact
        </a>
        </Magnetic>
      </div>
    </header>
  )
}
