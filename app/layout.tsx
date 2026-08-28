import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Poppins, Roboto, Red_Hat_Display, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-red-hat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    template: "%s | Mech-E-Tron",
  },
  description:
    "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
  keywords: [
    "robotics course Chennai", "robotics course Hyderabad", "robotics course Tirupati",
    "arduino training India", "STEM summer camp Chennai", "STEM summer camp Hyderabad",
    "robotics summer camp 2026", "final year project help", "btech project ECE",
    "arduino course students", "robotics classes near me", "drone training India DGCA",
    "world robotics championship India", "AICRA robotics", "Mech-E-Tron",
  ],
  metadataBase: new URL("https://mechetron.com"),
  alternates: { canonical: "https://mechetron.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mech-E-Tron",
    title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    description: "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
    images: [
      {
        url: "https://mechetron.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mech-E-Tron — Hands-On Robotics & STEM Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics Courses in Chennai & Hyderabad | Mech-E-Tron",
    description: "AICRA certified robotics & STEM courses. Arduino, drones, AI & IoT. Book a free demo.",
    images: ["https://mechetron.com/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // verification: { google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable} ${redHatDisplay.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCVKDH9T');
          `}
        </Script>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N4XHBYKS0F" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Prevent duplicate pageview tracking if GTM triggers GA4 pageviews
            gtag('config', 'G-N4XHBYKS0F', { send_page_view: false });
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1146287734292661');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* JSON-LD — LocalBusiness + EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "EducationalOrganization"],
                  "@id": "https://mechetron.com/#org",
                  name: "Mech-E-Tron",
                  description: "Hands-on robotics and STEM education for school and college students. Arduino courses, drone training, AI and IoT, and final year project support.",
                  url: "https://mechetron.com",
                  logo: "https://mechetron.com/images/logo-mechetron.png",
                  foundingDate: "2025",
                  telephone: ["+918148435246", "+918499985383"],
                  email: "info@mechetron.com",
                  priceRange: "₹₹",
                  openingHours: "Mo-Sa 09:00-18:00",
                  hasCredential: "AICRA District Coordinator",
                  address: [
                    {
                      "@type": "PostalAddress",
                      streetAddress: "Mahindra World City, Paranur Railway Station",
                      addressLocality: "Chennai",
                      addressRegion: "Tamil Nadu",
                      postalCode: "603002",
                      addressCountry: "IN",
                    },
                    {
                      "@type": "PostalAddress",
                      streetAddress: "OTBI, Osmania University, Central Facilities for R&D Building",
                      addressLocality: "Hyderabad",
                      addressRegion: "Telangana",
                      postalCode: "500007",
                      addressCountry: "IN",
                    },
                  ],
                  geo: { "@type": "GeoCoordinates", latitude: 17.4065, longitude: 78.4772 },
                  contactPoint: [
                    { "@type": "ContactPoint", telephone: "+918148435246", contactType: "customer support", areaServed: "IN", availableLanguage: ["English", "Telugu", "Hindi"] },
                  ],
                  sameAs: [
                    "https://instagram.com/mechetron",
                    "https://youtube.com/@mechetron",
                    "https://twitter.com/mechetron",
                  ],
                  memberOf: [
                    { "@type": "Organization", name: "AICRA" },
                    { "@type": "Organization", name: "Skill India" },
                    { "@type": "Organization", name: "MSME" },
                    { "@type": "Organization", name: "Android Robo" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mechetron.com/#website",
                  url: "https://mechetron.com",
                  name: "Mech-E-Tron",
                  publisher: { "@id": "https://mechetron.com/#org" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://mechetron.com/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCVKDH9T" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel Code (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1146287734292661&ev=PageView&noscript=1" />`,
          }}
        />
        {/* End Meta Pixel Code (noscript) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
        >
          Skip to content
        </a>
        {/* Top announcement bar */}
        <div className="bg-[#0a0e1a] border-b border-white/[0.07] hidden md:block">
          <div className="container-x py-2 flex items-center justify-between text-[11px] text-white/55">
            <div className="flex items-center gap-0 divide-x divide-white/10">
              <span className="pr-4">👩‍🎓 10,000+ Students Trained</span>
              <span className="px-4">🏫 120+ Schools Partnered</span>
              <span className="px-4">🤖 500+ Projects Built</span>
              <span className="pl-4">🏆 Award Winning Training</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📍 Chennai, India</span>
              <a href="https://facebook.com/mechetron" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/mechetron" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@mechetron" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <Navbar />
        <main id="main-content">{children}</main>
        <Newsletter />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <ScrollAnimator />
      </body>
    </html>
  );
}
