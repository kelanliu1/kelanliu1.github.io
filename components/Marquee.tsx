'use client'

const items = [
  'Python', 'TypeScript', 'AWS', 'React', 'Node.js', 'Docker',
  'PyTorch', 'PostgreSQL', 'Redis', 'Flask', 'FastAPI', 'Angular',
  'OpenCV', 'GCP', 'Claude Code', 'D3.js', 'Linux', 'MySQL',
]

export default function Marquee() {
  const row = items.map((item, i) => (
    <span
      key={i}
      className="text-xs tracking-widest uppercase whitespace-nowrap px-8"
      style={{ color: 'var(--muted)' }}
    >
      {item}
    </span>
  ))

  return (
    <div
      className="overflow-hidden py-5"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex animate-marquee">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  )
}
