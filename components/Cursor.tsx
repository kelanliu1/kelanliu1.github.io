'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function Cursor() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useSpring(0, { stiffness: 300, damping: 25 })
  const y = useSpring(0, { stiffness: 300, damping: 25 })

  useEffect(() => {
    // Only show custom cursor on desktop with fine pointer
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    setVisible(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, [role="button"]')) {
        setHovered(true)
      }
    }

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, [role="button"]')) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [x, y])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 48 : 16,
          height: hovered ? 48 : 16,
          background: hovered ? 'rgba(232, 201, 126, 0.15)' : 'transparent',
          border: hovered ? '1px solid rgba(232, 201, 126, 0.4)' : '1.5px solid var(--color-accent)',
          transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
        }}
      />
    </>
  )
}
