import './globals.css'
import { Inter, Space_Mono } from 'next/font/google'

const body = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  weight: ['400', '700']
});

const mono = Space_Mono({
  subsets: ['latin'],
  variable: "--font-space-mono",
  weight: ['400', '700']
});

export const metadata = {
  title: 'Alen Roady | Qosmo',
  description: 'Portfolio Website of Alen Roady',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  )
}
