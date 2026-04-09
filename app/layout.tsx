import type { Metadata } from "next";
import { playfair, jakarta, dmMono } from "@/lib/fonts";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camp Lovište — Pelješac, Croatia",
  description:
    "A family-run campsite at the unspoiled tip of the Pelješac peninsula. Camping plots for vans & motorhomes plus fully-equipped guest houses. 50m from the Adriatic, close to Korčula and all the best of Croatia.",
  keywords: [
    "camp loviste",
    "camping peljesac",
    "loviste croatia",
    "campervan croatia",
    "family campsite croatia",
    "adriatic camping",
    "korcula day trip",
    "peljesac accommodation",
    "loviste guest house",
    "croatia camping",
  ],
  authors: [{ name: "Camp Lovište" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Camp Lovište — Pelješac, Croatia",
    description:
      "A family haven at the tip of Pelješac. Camping plots & guest houses. Beach across the road, Korčula 12 minutes away.",
    siteName: "Camp Lovište",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camp Lovište — Pelješac, Croatia",
    description:
      "A family haven at the tip of Pelješac. Camping plots & guest houses. Beach across the road, Korčula 12 minutes away.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "Campground"],
  name: "Camp Lovište",
  description:
    "Family-run camping site on the Pelješac peninsula, Croatia. Camping plots for campervans and motorhomes, fully-equipped guest houses, 50m from the Adriatic.",
  url: "https://camploviste.hr",
  telephone: "+38520123456",
  email: "info@camploviste.hr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viganj bb",
    addressLocality: "Lovište",
    addressRegion: "Dubrovnik-Neretva County",
    postalCode: "20269",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.9665,
    longitude: 17.0219,
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    validFrom: "2025-05-01",
    validThrough: "2025-09-30",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Beach Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Electric Hookup", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
  ],
  hasMap: "https://maps.google.com/?q=Loviste,Croatia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
