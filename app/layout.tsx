'use client'
import Nav from '@/comps/nav'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam\'s Photography',
  description: 'An example website for Obet.tech services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname();

  const urlImg = path === "/" ? "url('/images/bailey_hero.jpg')" : "none";

  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage: urlImg}}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
