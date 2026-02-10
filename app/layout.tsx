import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://escudodoamor.com.br"),
  title: {
    default: "Medium Vitória Prado - Escudo do Amor - Recupere seu amor e equilíbrio espiritual | Amarração Amorosa",
    template: "%s | Medium Vitória Prado"
  },
  description: "Especialista em Amarração Amorosa, União de Casais e Consultas Espirituais. Há mais de 20 anos ajudando a recuperar o amor e o equilíbrio energético com sigilo absoluto.",
  keywords: [
    "Amarração Amorosa",
    "União de Casais",
    "Consulta Espiritual",
    "Mãe de Santo",
    "Vidente",
    "Tarot",
    "Búzios",
    "Limpeza Espiritual",
    "Astrologia",
    "Medium Vitória Prado",
    "Escudo do Amor",
    "Recupere seu amor", 
    "e equilíbrio espiritual"
  ],
  authors: [{ name: "Vitória Prado" }],
  creator: "Vitória Prado",
  publisher: "Vitória Prado",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escudo do Amor - Recupere seu amor e equilíbrio espiritual",
    description: "Recupere seu amor e equilíbrio espiritual com o Escudo do Amor. Especialista em Amarração Amorosa e União de Casais.",
    url: "https://escudodoamor.com.br",
    siteName: "Escudo do Amor",
    images: [
      {
        url: "/FOTO Vitoria Prado.webp",
        width: 1200,
        height: 630,
        alt: "Medium Vitória Prado",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escudo do Amor - Recupere seu amor e equilíbrio espiritual",
    description: "Especialista em Amarração Amorosa e União de Casais. Recupere seu amor hoje.",
    images: ["/FOTO Vitoria Prado.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token", // Substituir pelo token real do Google Search Console
  },
  category: "spirituality",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Medium Vitória Prado - Escudo do Amor",
  "image": "https://escudodoamor.com.br/FOTO Vitoria Prado.webp",
  "description": "Especialista em Amarração Amorosa, União de Casais e Consultas Espirituais.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.550520,
    "longitude": -46.633308
  },
  "url": "https://escudodoamor.com.br",
  "telephone": "+5519994451358",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17810019933"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17810019933');

            // 🔥 CONVERSÃO DE VISUALIZAÇÃO DE PÁGINA
            gtag('event', 'conversion', {
              send_to: 'AW-17810019933/aUIPCMi6-NIbEN2svaxC'
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
