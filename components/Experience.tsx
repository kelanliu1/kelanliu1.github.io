'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Role {
  company: string
  title: string
  date: string
  points: string[]
}

const roles: Role[] = [
  {
    company: 'ClassLink',
    title: 'Software Engineer',
    date: 'Jan 2024 – Present',
    points: [
      'Architected and implemented a serverless translation management system supporting localization across multiple product front ends; delivered a department-wide presentation on problem context, architecture, and system design (Python, TypeScript, AWS Lambda, S3)',
      'Collaborated cross-functionally across teams to ship features end-to-end, contributing directly to adjacent team codebases',
      'Developed backend APIs and event-driven automation workflows using Node.js, TypeScript, and Python, deployed on Amazon ECS and AWS Lambda',
      'Optimized critical SQL queries, reducing database query costs by up to 68% (MySQL, Redis)',
      'Built a resilient request library with retry logic and exponential backoff, reducing socket hangups and server-side errors',
      'Identified and patched a privilege-escalation vulnerability caused by misconfigured AWS SES IAM permissions',
      'Built a multi-agent AI debugging tool using Claude Code with a log-tailing watcher agent, interactive code-fix session, and automated QA agent for curl-based validation (Python, Bash)',
    ],
  },
  {
    company: 'Waymo',
    title: 'Software Engineer, Machine Learning, Research Intern',
    date: 'Sept 2021 – Jan 2022',
    points: [
      'Contributed to a real-time autonomous driving simulation platform through kinematics modeling and cloud visualization integration (C++, Python)',
      'Partnered with Simulation and UI teams to refine scenario realism and optimize user interaction workflows, improving fidelity across kinematics modeling, visualization, and driving UI',
      'Built an operator-facing driving UI and a data collection pipeline for simulation workflows (Angular, RxJS, TypeScript, Protobuf)',
      'Optimized end-to-end latency to under 200ms by implementing D3.js-based visualization tools for monitoring rendering and mapping plugin performance',
      'Significantly improved intern permission pitfalls by implementing intern-friendly scripts for existing software infrastructure',
    ],
  },
  {
    company: 'Intuidex',
    title: 'Software Engineer Intern',
    date: 'May 2021 – Aug 2021',
    points: [
      'Ported and optimized video-processing and ML algorithms for embedded GPU systems using CUDA, Docker, and Python',
      'Implemented and optimized real-time motion detection algorithms supporting a YOLO-based license plate detection pipeline for the Jetson Nano and Xavier (OpenCV)',
      'Reduced object detection and classification training runtime by 4 minutes on a large training dataset of thousands of vehicles',
    ],
  },
]

function RoleCard({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h2
          className="font-serif text-2xl"
          style={{ color: '#f0ece4' }}
        >
          {role.company}
        </h2>
        <span
          className="font-mono text-xs"
          style={{ color: 'rgba(240,236,228,0.35)' }}
        >
          {role.date}
        </span>
      </div>
      <p
        className="font-sans text-sm font-light mb-6"
        style={{ color: 'rgba(240,236,228,0.5)' }}
      >
        {role.title}
      </p>
      <div
        className="mb-6"
        style={{ height: '1px', background: 'rgba(240,236,228,0.08)' }}
      />
      <ul className="flex flex-col gap-3">
        {role.points.map((point, j) => (
          <li
            key={j}
            className="font-sans text-sm font-light leading-relaxed flex gap-3"
            style={{ color: 'rgba(240,236,228,0.65)' }}
          >
            <span style={{ color: '#e8c97e', flexShrink: 0, marginTop: '1px' }}>·</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef<HTMLParagraphElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      className="px-8 md:px-16 py-28"
      style={{ borderTop: '1px solid rgba(240,236,228,0.08)' }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.p
          ref={headerRef}
          className="text-xs tracking-widest uppercase mb-16 font-sans font-medium"
          style={{ color: '#e8c97e' }}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.p>

        <div className="flex flex-col gap-20">
          {roles.map((role, i) => (
            <RoleCard key={i} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
