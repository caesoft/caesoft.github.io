import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://caesoft.github.io'),
  title: {
    default: 'CAESoft - Centro Acadêmico de Engenharia de Software da UEPA',
    template: '%s | CAESoft UEPA'
  },
  description: 'CAESoft é o Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará (UEPA). Conectando estudantes, promovendo conhecimento e construindo o futuro da tecnologia no Pará.',
  keywords: [
    'CAESoft',
    'UEPA',
    'Engenharia de Software',
    'Centro Acadêmico',
    'Universidade do Estado do Pará',
    'Tecnologia',
    'Programação',
    'Software',
    'Pará',
    'Ananindeua',
    'Estudantes',
    'Academia',
    'Computação'
  ],
  authors: [{ name: 'CAESoft UEPA' }],
  creator: 'CAESoft - Centro Acadêmico de Engenharia de Software UEPA',
  publisher: 'CAESoft UEPA',
  category: 'education',
  classification: 'Centro Acadêmico',
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://caesoft.github.io',
    title: 'CAESoft - Centro Acadêmico de Engenharia de Software UEPA',
    description: 'CAESoft é o Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará (UEPA). Conectando estudantes, promovendo conhecimento e construindo o futuro da tecnologia no Pará.',
    siteName: 'CAESoft UEPA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CAESoft - Centro Acadêmico de Engenharia de Software UEPA',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'CAESoft UEPA Logo',
        type: 'image/png',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'CAESoft - Centro Acadêmico de Engenharia de Software UEPA',
    description: 'CAESoft é o Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará (UEPA). Conectando estudantes, promovendo conhecimento e construindo o futuro da tecnologia no Pará.',
    images: ['/og-image.png'],
    creator: '@caesoft_uepa',
    site: '@caesoft_uepa',
  },
  
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#8B5CF6',
      },
    ],
  },
  

  
  other: {
    'theme-color': '#0C091F',
    'msapplication-TileColor': '#8B5CF6',
    'msapplication-TileImage': '/mstile-144x144.png',
    
    'discord:title': 'CAESoft - Centro Acadêmico de Engenharia de Software UEPA',
    'discord:description': 'Centro Acadêmico de Engenharia de Software da UEPA. Conectando estudantes e promovendo conhecimento em tecnologia.',
    'discord:image': '/og-image.png',
    
    'whatsapp:title': 'CAESoft UEPA',
    'whatsapp:description': 'Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará',
    'whatsapp:image': '/og-image.png',
    
    'telegram:title': 'CAESoft UEPA',
    'telegram:description': 'Centro Acadêmico de Engenharia de Software da UEPA',
    'telegram:image': '/og-image.png',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="CAESoft UEPA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CAESoft UEPA" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CAESoft - Centro Acadêmico de Engenharia de Software UEPA",
              "alternateName": "CAESoft UEPA",
              "url": "https://caesoft.github.io",
              "logo": "https://caesoft.github.io/og-image-square.png",
              "description": "Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará (UEPA). Conectando estudantes, promovendo conhecimento e construindo o futuro da tecnologia no Pará.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ananindeua",
                "addressRegion": "PA",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Portuguese",
                "email": "caesoft@aluno.uepa.br",
                "telephone": "+55-91-98363-8964"
              },
              "sameAs": [
                "https://github.com/caesoft",
                "https://www.instagram.com/caesoft.uepa",
                "https://www.linkedin.com/in/caesoft-uepa/",
                "https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc",
                "https://discord.gg/23qVdpmbZ8"
              ]
            })
          }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
