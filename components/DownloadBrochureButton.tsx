"use client";

export default function DownloadBrochureButton() {
  return (
    <a
      href="/api/download-brochure"
      download="ISL_School_Proposal.pdf"
      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border-2 border-[#FFB400] text-sm font-bold text-white hover:bg-[#FFB400]/10 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_15px_rgba(255,180,0,0.2)] transition-all duration-300 w-full sm:w-auto text-center"
    >
      <svg
        className="w-5 h-5 text-[#FFB400]"
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
      <span>Download Brochure</span>
    </a>
  );
}

