import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Richard Zhang | CS Student @ UPenn',
    template: '%s | Richard Zhang',
  },
  description: 'Richard Zhang - Computer Science student at University of Pennsylvania. Quantitative Trading Intern at IMC Trading. Machine Learning Research Intern. Software Engineer.',
  keywords: [
    'Richard Zhang',
    'Computer Science',
    'UPenn',
    'University of Pennsylvania',
    'Quantitative Trading',
    'Machine Learning',
    'Software Engineer',
    'CS Student',
    'IMC Trading',
    'Philadelphia',
  ],
  authors: [{ name: 'Richard Zhang' }],
  creator: 'Richard Zhang',
  publisher: 'Richard Zhang',
  metadataBase: new URL('https://richardzhang.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://richardzhang.io',
    siteName: 'Richard Zhang',
    title: 'Richard Zhang | CS Student @ UPenn',
    description: 'Computer Science student at University of Pennsylvania. Quantitative Trading Intern at IMC Trading. Machine Learning Research Intern.',
    images: [
      {
        url: '/profile2.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Richard Zhang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Zhang | CS Student @ UPenn',
    description: 'Computer Science student at University of Pennsylvania. Quantitative Trading Intern at IMC Trading.',
    images: ['/profile2.jpeg'],
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
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Richard Zhang',
              url: 'https://richardzhang.io',
              image: 'https://richardzhang.io/profile2.jpeg',
              sameAs: [
                'https://linkedin.com/in/richardzhang2004',
              ],
              jobTitle: 'Computer Science Student',
              worksFor: {
                '@type': 'EducationalOrganization',
                name: 'University of Pennsylvania',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Pennsylvania',
              },
              email: 'richard7.zhang@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Philadelphia',
                addressRegion: 'PA',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
