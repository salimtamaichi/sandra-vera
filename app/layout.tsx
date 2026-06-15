import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = "https://www.sandravera.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sandra Vera Estètic | Centro de Estética en Barcelona",
    template: "%s | Sandra Vera Estètic",
  },
  description:
    "Centro de estética en Barcelona especializado en tratamientos faciales, corporales y masajes terapéuticos. Reserva tu cita y descubre nuestros bonos con descuento.",
  keywords: [
    "centro de estética Barcelona",
    "masajes Barcelona",
    "tratamientos faciales",
    "radiofrecuencia facial",
    "maderoterapia",
    "presoterapia",
    "Sandra Vera",
    "Calle Entença Barcelona",
  ],
  authors: [{ name: "Sandra Vera Estètic" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Sandra Vera Estètic",
    title: "Sandra Vera Estètic | Centro de Estética en Barcelona",
    description:
      "Tratamientos faciales, corporales y masajes terapéuticos en el corazón de Barcelona. Reserva tu cita hoy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandra Vera Estètic - Centro de Estética en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandra Vera Estètic | Centro de Estética en Barcelona",
    description:
      "Tratamientos faciales, corporales y masajes terapéuticos en Barcelona.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Sandra Vera Estètic",
    image: `${siteUrl}/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+34618000456",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Entença 134",
      addressLocality: "Barcelona",
      postalCode: "08015",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3851,
      longitude: 2.1469,
    },
    sameAs: [
      "https://www.instagram.com/estetic_pro_bcn/?hl=es",
      "https://www.tiktok.com/@estetic.pro.by.sa",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
