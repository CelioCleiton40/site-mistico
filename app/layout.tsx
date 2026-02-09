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
  title: {
    default: "Medium Vitória Prado - Ritual Chora Nos Meus Pés | Amarração Amorosa",
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
    "Ritual Chora Nos Meus Pés"
  ],
  authors: [{ name: "Vitória Prado" }],
  creator: "Vitória Prado",
  publisher: "Vitória Prado",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Medium Vitória Prado - Ritual Chora Nos Meus Pés",
    description: "Recupere seu amor e equilíbrio espiritual com a Medium Vitória Prado. Especialista em Amarração Amorosa e União de Casais.",
    url: "https://mediumvitoriaprado.com.br",
    siteName: "Medium Vitória Prado",
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
    title: "Medium Vitória Prado - Ritual Chora Nos Meus Pés",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
