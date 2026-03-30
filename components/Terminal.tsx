'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

type LineType = 'output' | 'input' | 'accent' | 'error' | 'dim'

interface TLine {
  id: number
  type: LineType
  content: string
}

let _id = 0
const uid = () => ++_id

const BOOT: { type: LineType; content: string; delay: number }[] = [
  { type: 'dim',    content: 'initializing portfolio...',                  delay: 200  },
  { type: 'dim',    content: '',                                            delay: 600  },
  { type: 'output', content: '  name ............ Kelan Liu',              delay: 800  },
  { type: 'output', content: '  role ............ Software Engineer',      delay: 970  },
  { type: 'output', content: '  company ......... ClassLink',              delay: 1140 },
  { type: 'output', content: '  stack ........... TypeScript · Python · AWS', delay: 1310 },
  { type: 'output', content: '  focus ........... Backend · AI/ML · Systems', delay: 1480 },
  { type: 'dim',    content: '',                                            delay: 1680 },
  { type: 'accent', content: "  Type 'help' to explore.",                  delay: 1850 },
  { type: 'dim',    content: '',                                            delay: 2000 },
]

function makeLines(items: { type: LineType; content: string }[]): TLine[] {
  return items.map(i => ({ id: uid(), type: i.type, content: i.content }))
}

function buildCommands(scroll: (id: string) => void): Record<string, () => TLine[]> {
  return {
    help: () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  whoami      ·  about me' },
      { type: 'output', content: '  experience  ·  work history' },
      { type: 'output', content: '  contact     ·  get in touch' },
      { type: 'output', content: '  ls          ·  list directory' },
      { type: 'output', content: '  clear       ·  clear terminal' },
      { type: 'output', content: '' },
    ]),
    whoami: () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  Software engineer focused on backend systems,' },
      { type: 'output', content: '  event-driven architecture, and AI/ML infrastructure.' },
      { type: 'output', content: '  Currently at ClassLink. Previously at Waymo.' },
      { type: 'output', content: '' },
      { type: 'output', content: '  BS Computer Science — Lehigh University' },
      { type: 'output', content: '' },
    ]),
    experience: () => {
      setTimeout(() => scroll('experience'), 400)
      return makeLines([
        { type: 'output', content: '' },
        { type: 'accent', content: '  ClassLink      Software Engineer         2024 – present' },
        { type: 'accent', content: '  Waymo          ML Research Intern         2021 – 2022' },
        { type: 'accent', content: '  Intuidex        SWE Intern                 2021' },
        { type: 'output', content: '' },
        { type: 'dim',    content: '  ↓ scrolling to full details...' },
        { type: 'output', content: '' },
      ])
    },
    contact: () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  email     kelanliu01@gmail.com' },
      { type: 'output', content: '  linkedin  linkedin.com/in/kelan-liu' },
      { type: 'output', content: '  github    github.com/kelanliu1' },
      { type: 'output', content: '' },
    ]),
    ls: () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  about.md        experience.json      contact.txt' },
      { type: 'dim',    content: '  secret.env      (permission denied)' },
      { type: 'output', content: '' },
    ]),
    'cat about.md': () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  Software engineer focused on backend systems,' },
      { type: 'output', content: '  event-driven architecture, and AI/ML infrastructure.' },
      { type: 'output', content: '  Currently at ClassLink. Previously at Waymo.' },
      { type: 'output', content: '' },
      { type: 'output', content: '  BS Computer Science — Lehigh University' },
      { type: 'output', content: '' },
    ]),
    'cat secret.env': () => makeLines([
      { type: 'error', content: '  cat: secret.env: Permission denied' },
      { type: 'output', content: '' },
    ]),
    'cat contact.txt': () => makeLines([
      { type: 'output', content: '' },
      { type: 'output', content: '  email     kelanliu01@gmail.com' },
      { type: 'output', content: '  linkedin  linkedin.com/in/kelan-liu' },
      { type: 'output', content: '  github    github.com/kelanliu1' },
      { type: 'output', content: '' },
    ]),
  }
}

function lineStyle(type: LineType): React.CSSProperties {
  switch (type) {
    case 'accent': return { color: '#e8c97e' }
    case 'error':  return { color: '#e87e7e' }
    case 'dim':    return { color: 'rgba(240,236,228,0.35)' }
    case 'input':  return { color: '#f0ece4' }
    default:       return { color: 'rgba(240,236,228,0.75)' }
  }
}

export default function Terminal() {
  const [lines, setLines]         = useState<TLine[]>([])
  const [input, setInput]         = useState('')
  const [ready, setReady]         = useState(false)
  const [history, setHistory]     = useState<string[]>([])
  const [histIdx, setHistIdx]     = useState(-1)
  const [showScroll, setShowScroll] = useState(false)

  const inputRef  = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const commands = buildCommands(scrollTo)

  // Boot sequence
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    BOOT.forEach(({ type, content, delay }) => {
      timers.push(setTimeout(() => {
        setLines(prev => [...prev, { id: uid(), type, content }])
      }, delay))
    })
    timers.push(setTimeout(() => {
      setReady(true)
      setTimeout(() => setShowScroll(true), 600)
    }, 2200))
    return () => timers.forEach(clearTimeout)
  }, [])

  // Auto-scroll terminal output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    const inputLine: TLine = { id: uid(), type: 'input', content: cmd }

    if (cmd === 'clear') {
      setLines([])
      setInput('')
      setHistory(h => [cmd, ...h])
      setHistIdx(-1)
      return
    }

    const handler = commands[cmd]
    const outputLines = handler
      ? handler()
      : makeLines([
          { type: 'error',  content: `  command not found: ${cmd}` },
          { type: 'dim',    content: "  Type 'help' for available commands." },
          { type: 'output', content: '' },
        ])

    setLines(prev => [...prev, inputLine, ...outputLines])
    setHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(i)
      setInput(history[i] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = Math.max(histIdx - 1, -1)
      setHistIdx(i)
      setInput(i === -1 ? '' : history[i])
    }
  }

  return (
    <section
      className="relative h-screen flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal output — scrollable */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-end px-8 md:px-16 pt-20 pb-4">
        <div className="w-full max-w-2xl mx-auto">
          {lines.map(line => (
            <div
              key={line.id}
              className="font-mono text-sm leading-7 whitespace-pre"
              style={lineStyle(line.type)}
            >
              {line.type === 'input' ? (
                <span>
                  <span style={{ color: '#e8c97e' }}>kelan@portfolio</span>
                  <span style={{ color: 'rgba(240,236,228,0.35)' }}> ~ $ </span>
                  {line.content}
                </span>
              ) : (
                line.content || '\u00A0'
              )}
            </div>
          ))}

          {/* Input prompt */}
          {ready && (
            <form onSubmit={submit} className="flex items-center font-mono text-sm mt-1">
              <span style={{ color: '#e8c97e' }}>kelan@portfolio</span>
              <span style={{ color: 'rgba(240,236,228,0.35)' }}>&nbsp;~&nbsp;$&nbsp;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none"
                style={{
                  color: '#f0ece4',
                  caretColor: '#e8c97e',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              />
              {!input && <span className="cursor-blink" />}
            </form>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Scroll hint */}
      {showScroll && (
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none scroll-hint"
          style={{ opacity: 0.3 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#f0ece4' }}>
            scroll
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 7l5 5 5-5" stroke="#f0ece4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </section>
  )
}
