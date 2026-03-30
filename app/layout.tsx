import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kelan Liu',
  description: 'Software Engineer — Backend · AI/ML · Systems',
  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
