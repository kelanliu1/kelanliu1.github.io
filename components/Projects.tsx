'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Creative Coffee Club',
    description:
      'Social platform for ~850 active creatives with Stripe subscriptions, A/B tested pricing, and an automated SMS pipeline for availability polling, introductions, and reminders. Features a scoring-based matching algorithm with city/slot segmentation, a full admin suite, and 7 automated cron jobs powering the biweekly matching cycle.',
    tech: ['Next.js', 'React', 'Supabase', 'Stripe', 'Twilio', 'Telnyx', 'SendGrid', 'PostHog', 'Vercel'],
    link: 'https://app.creativecoffee.club/museum',
  },
  {
    title: 'GramIt',
    description:
      'Online multiplayer game combining social interaction and creative image selection. Built with AWS Step Functions for real-time game state management and XState for frontend state machines.',
    tech: ['React Native', 'AWS Lambda', 'Step Functions', 'TypeScript', 'Python'],
    link: 'https://github.com/kelanliu1',
  },
  {
    title: 'Instant Object Tracking',
    description:
      'Web app and API for real-time video analysis with bounding boxes, classifications, and class probabilities. Uses YOLOv5 and SORT for object tracking with multithreaded parallel processing.',
    tech: ['Python', 'React', 'Flask', 'PyTorch', 'OpenCV'],
    link: 'https://github.com/kelanliu1',
  },
  {
    title: 'Tiny-GPT',
    description:
      'A Transformer decoder stack with self-attention trained on raw text data. Built from scratch with a 16x32 tensor (batch size x block size) and a 9:1 training to validation set split.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    link: 'https://github.com/kelanliu1',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group p-8 transition-all duration-300"
      style={{
        border: '1px solid var(--border)',
        borderRadius: '4px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(232, 201, 126, 0.2)'
        e.currentTarget.style.background = 'rgba(232, 201, 126, 0.02)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-serif text-xl md:text-2xl">{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase transition-colors duration-200 link-underline shrink-0 ml-4"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-fg)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {project.link?.includes('github') ? 'GitHub' : 'View'} →
          </a>
        )}
      </div>
      <p
        className="font-sans text-sm font-light leading-relaxed mb-6"
        style={{ color: 'rgba(240,236,228,0.65)' }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 font-light"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--color-accent)',
              borderRadius: '2px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef<HTMLParagraphElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          ref={headerRef}
          className="text-xs tracking-widest uppercase mb-16 font-sans font-medium"
          style={{ color: 'var(--color-accent)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
