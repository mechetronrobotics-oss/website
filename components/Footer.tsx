
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-ink relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="glow-orb w-96 h-96 bg-brand-blue/10 -bottom-40 -left-20" />

      {/* Top divider with glow */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      {/* Main footer */}
      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

        {/* Column 1: Brand Logo & Socials */}
        <div className="flex flex-col items-start">
          <Link href="/" className="inline-flex items-center mb-5 group">
            <img
              src={companyInfo.logoFooter}
              alt={`${companyInfo.name} Logo`}
              style={{ height: '70px', width: 'auto' }}
              className="object-contain"
            />
          </Link>
          <p className="text-white/40 text-[13px] leading-relaxed">
            {companyInfo.tagline}
          </p>
          <p className="text-white/45 text-[13px] mt-3 leading-relaxed">
            Empowering future innovators through hands-on robotics &amp; STEM education.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-6">
            <a
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg border border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/10 flex items-center justify-center transition-all text-white/70 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/10 flex items-center justify-center transition-all text-white/70 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Exactly 6 active pages) */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-[14px] uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 text-[13px] text-white/40 font-medium">
            <li>
              <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-brand-blue transition-colors">Courses</Link>
            </li>
            <li>
              <Link href="/summer-camp" className="hover:text-brand-blue transition-colors">Workshop & Campus</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/verify-certificate" className="hover:text-brand-blue transition-colors">Verify Certificate</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-display font-semibold mb-6 text-white text-[14px] uppercase tracking-wider">
            Contact Us
          </h4>
          <div className="space-y-4 text-[13px] text-white/40 leading-relaxed font-medium">
            <div className="flex gap-2">
              <span className="flex-shrink-0 mt-0.5">📍</span>
              <p className="text-[12px] text-white/40">
                <span className="text-white/60 font-bold block mb-1">OTBI, Osmania University</span>
                Hyderabad, Chennai, Tirupati
              </p>
            </div>
            <div>
              <span className="mr-1">📱</span>
              <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-blue transition-colors text-white/60 font-bold">
                {companyInfo.phone}
              </a>
            </div>
            <div>
              <span className="mr-1">📧</span>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-blue transition-colors text-white/60 font-bold break-all">
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 py-8">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>© {new Date().getFullYear()} Mech-E-Tron Robotics. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
