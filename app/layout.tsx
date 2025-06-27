import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from './components/analytics'

export const metadata: Metadata = {
  title: 'Microscope AI',
  description: 'Examine your code under the microscope to discover hidden risks and edge cases.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
