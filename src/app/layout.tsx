import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { COMPANY_INFO } from "@/data/assets";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071F41",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://covenantconstructionpainting.com"),
  title: {
    default: "Covenant Construction & Painting | Premium Remodeling & Painting",
    template: "%s | Covenant Construction & Painting",
  },
  description:
    "Covenant Construction & Painting delivers thoughtful kitchen remodeling, bathroom renovations, construction improvements, and precision interior and exterior painting.",
  keywords: [
    "kitchen remodeling",
    "bathroom remodeling",
    "residential painting",
    "home improvement",
    "construction craftsmanship",
    "high-end remodeling",
    "Covenant Construction",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covenantconstructionpainting.com",
    siteName: COMPANY_INFO.name,
    title: "Covenant Construction & Painting | Built With Purpose. Finished With Excellence.",
    description:
      "Thoughtful remodeling, quality craftsmanship, and professional painting designed to transform your home with confidence.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Covenant Construction & Painting Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Construction & Painting",
    description: "Thoughtful remodeling, quality craftsmanship, and professional painting.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
  // Schema.org Structured Data (HomeAndConstructionBusiness) without fabricating fake data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_INFO.name,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    url: "https://covenantconstructionpainting.com",
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling and Painting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            description: "Custom kitchen design, cabinetry, countertops, and functional reconfiguration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Master suites, walk-in showers, custom tilework, and spa bathroom renovations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Painting",
            description: "Interior and exterior precision architectural painting and surface preparation.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-covenant-charcoal antialiased selection:bg-covenant-navy selection:text-covenant-gold">
        <Header />
        <main className="flex-grow pt-[84px] sm:pt-[92px]">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
