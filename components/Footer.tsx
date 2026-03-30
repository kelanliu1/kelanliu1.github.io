'use client'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kelan-liu/' },
  { label: 'GitHub',   href: 'https://github.com/kelanliu1' },
  { label: 'Email',    href: 'mailto:kelanliu01@gmail.com' },
]

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      style={{ borderTop: '1px solid rgba(240,236,228,0.08)' }}
    >
      <span
        className="font-mono text-xs"
        style={{ color: 'rgba(240,236,228,0.25)' }}
      >
        Kelan Liu
      </span>
      <nav className="flex gap-8">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="font-sans text-xs font-light transition-colors duration-200 link-underline"
            style={{ color: 'rgba(240,236,228,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0ece4')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,236,228,0.35)')}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
