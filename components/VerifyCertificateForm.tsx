"use client";

import { useState } from "react";
import Image from "next/image";
import { getCertificate, CertificateRecord } from "@/lib/certificates";

export default function VerifyCertificateForm() {
  const [certId, setCertId] = useState("");
  const [searchedId, setSearchedId] = useState("");
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    const record = getCertificate(certId);
    setCertificate(record);
    setSearchedId(certId.trim().toUpperCase());
    setHasSearched(true);
  };

  const handleDownload = async () => {
    if (!certificate) return;
    setIsDownloading(true);
    try {
      const response = await fetch(certificate.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate_${certificate.studentName.replace(/\s+/g, "_")}_${certificate.id}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download certificate:", error);
      // Fallback: open image in a new tab
      window.open(certificate.image, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full">
      {/* ── Search Input Box ── */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.06)] -mt-10 relative z-10">
        <form onSubmit={handleVerify} className="space-y-4">
          <label htmlFor="certificate-id" className="block text-sm font-bold text-slate-800 uppercase tracking-wide">
            Enter Certificate ID
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 text-lg">
                🎫
              </span>
              <input
                id="certificate-id"
                type="text"
                placeholder="e.g. METSC-2026-0001"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-base font-semibold focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              id="verify-btn"
              className="px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base transition-all shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:scale-98 text-center"
            >
              Verify Certificate
            </button>
          </div>
        </form>
      </div>

      {/* ── Verification Result Block ── */}
      <div className="max-w-5xl mx-auto px-5 mt-12 mb-20 transition-all duration-500">
        {hasSearched && certificate && (
          <div className="bg-white rounded-3xl border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.06)] overflow-hidden animate-fade-in">
            {/* Header Status Strip */}
            <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-base animate-pulse">
                  ✓
                </div>
                <div>
                  <span className="text-xs text-emerald-600 font-black uppercase tracking-wider block">Verification Status</span>
                  <span className="text-sm text-emerald-800 font-extrabold flex items-center gap-1.5">
                    Authentic Record Verified
                  </span>
                </div>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                VERIFIED
              </div>
            </div>

            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Student Details Card */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Candidate Name</span>
                  <h2 className="text-3xl font-display font-extrabold text-[#0F172A] mt-1 flex items-center gap-2">
                    {certificate.studentName}
                    <span className="text-emerald-500 text-xl" title="Verified Candidate">☑️</span>
                  </h2>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Course Title</span>
                    <span className="font-extrabold text-[#0F172A] mt-0.5 block">{certificate.courseName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Certificate ID</span>
                    <span className="font-extrabold text-brand-blue font-mono mt-0.5 block">{certificate.id}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Completion Date</span>
                    <span className="font-extrabold text-[#0F172A] mt-0.5 block">{certificate.issueDate}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Grade Achieved</span>
                    <span className="font-extrabold text-[#0F172A] mt-0.5 block">{certificate.grade}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Training Center</span>
                    <span className="font-extrabold text-[#0F172A] mt-0.5 block">{certificate.center}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider block">Accreditation</span>
                    <span className="font-extrabold text-emerald-600 mt-0.5 block">{certificate.accreditation}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <span className="text-xl mt-0.5">ℹ️</span>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      This is to certify that <span className="font-extrabold text-slate-800">{certificate.studentName}</span> has successfully completed the course <span className="font-extrabold text-slate-800">{certificate.courseName}</span> from <span className="font-extrabold text-[#2563EB]">Mech-E-Tron Robotics</span> and is officially recognized for all practical lab assignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Certificate Preview Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => setShowLightbox(true)}
                  className="relative w-full aspect-[1.414] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-zoom-in group"
                >
                  <Image
                    src={certificate.image}
                    alt={`Certificate preview for ${certificate.studentName}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-bold gap-2">
                    <span>🔍</span>
                    <span>Click to Zoom</span>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-3 mt-4">
                  <button
                    onClick={() => setShowLightbox(true)}
                    className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline flex items-center justify-center gap-1 py-1"
                  >
                    <span>🔍 View Full Size Document</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-extrabold text-sm transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isDownloading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Download Certificate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {hasSearched && !certificate && (
          <div className="bg-white rounded-3xl border border-red-100 p-8 text-center max-w-xl mx-auto shadow-[0_20px_50px_rgba(239,68,68,0.05)] animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-2xl text-red-500 mx-auto mb-4 border border-red-100">
              ⚠️
            </div>
            <h3 className="font-display font-extrabold text-[#0F172A] text-lg mb-2">Certificate Not Found</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              We couldn't find any record matching <span className="font-extrabold text-red-500">"{searchedId}"</span>. Please double check the formatting (e.g. including dashes) and try again.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-400 leading-relaxed font-semibold">
              If this certificate was issued recently, it may take up to 24 hours to sync to the online database. For assistance, contact support at <span className="text-brand-blue">info@mechetron.com</span>.
            </div>
          </div>
        )}
      </div>

      {/* ── Lightbox Modal ── */}
      {showLightbox && certificate && (
        <div
          onClick={() => setShowLightbox(false)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fade-in"
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition"
          >
            ✕
          </button>
          <div className="relative w-full max-w-5xl aspect-[1.414] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={certificate.image}
              alt={`Certificate full preview for ${certificate.studentName}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
