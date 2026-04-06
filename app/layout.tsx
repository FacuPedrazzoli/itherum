import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { LazyToaster } from '@/components/lazy-toaster'
import AgentationWrapper from './components/AgentationWrapper'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#080c0a',
}

export const metadata: Metadata = {
  title: 'Itherum — Tecnología con sentido común',
  description:
    'Micro-agencia de software de Argentina. Desarrollo a medida, diseño de producto y consultoría técnica. Construimos tecnología con sentido común.',
  keywords: ['desarrollo web', 'software', 'agencia', 'Argentina', 'Next.js', 'TypeScript', 'UX'],
  authors: [{ name: 'Itherum' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Itherum — Tecnología con sentido común',
    description: 'Micro-agencia de software de Argentina. Construimos tecnología con sentido común.',
    type: 'website',
    locale: 'es_AR',
  },
  icons: {
    icon: '/logo-sin-fondo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjBZRjr0FKM_04uQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CustomCursor />
          {children}
          <LazyToaster />
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' && <AgentationWrapper />}
      </body>
    </html>
  )
}
