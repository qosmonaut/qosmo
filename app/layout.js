import './globals.css'
import { Inter, Noto_Sans_Mono } from 'next/font/google'

const body = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
});

const mono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: "--font-space-mono",
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
