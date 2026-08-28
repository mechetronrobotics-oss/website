import type { Metadata } from "next";
import Link from "next/link";
import VerifyCertificateForm from "@/components/VerifyCertificateForm";

export const metadata: Metadata = {
  title: "Verify Certificate | Mech-E-Tron — S.T.E.M Robotics",
  description:
    "Verify the authenticity of student certificates issued by Mech-E-Tron Robotics. Enter the certificate number to check completion details online.",
  keywords: [
    "verify robotics certificate",
    "Mech-E-Tron certification",
    "robotics course validation",
    "student verification Mech-E-Tron",
    "AICRA student certificate search",
  ],
  alternates: { canonical: "https://mechetron.com/verify-certificate" },
  openGraph: {
    title: "Verify Certificate | Mech-E-Tron — S.T.E.M Robotics",
    description:
      "Verify student certification and course completion details online. Official validation center for Mech-E-Tron programs.",
    url: "https://mechetron.com/verify-certificate",
  },
};

export default function VerifyCertificatePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── Hero Header Section (Dark Theme) ── */}
      <section className="relative bg-[#050b14] overflow-hidden py-16 lg:py-20 text-white">
        {/* Grid and Orb Backdrops */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span className="text-white/20">&gt;</span>
            <span className="text-white/70">Verify Certificate</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
            Verify <span className="text-[#FFB400]">Certificate</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed font-medium max-w-xl">
            Validate the authenticity of Mech-E-Tron certifications. Enter the student's unique certificate ID below to inspect record verification.
          </p>
        </div>
      </section>

      {/* ── Interactive Verification Component ── */}
      <VerifyCertificateForm />
    </main>
  );
}
