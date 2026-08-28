"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#f8fafc]">
      <div className="text-center max-w-md px-6 flex flex-col items-center">
        {/* Error Image */}
        <div className="relative w-64 h-48 rounded-2xl overflow-hidden border border-slate-100 shadow-md mb-8">
          <Image
            src="/images/whyus.jpg"
            alt="Something went wrong illustration"
            fill
            sizes="256px"
            priority
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl font-display font-bold text-brand-ink mb-4">
          Something went wrong
        </h2>
        <p className="text-brand-muted mb-8">
          We hit an unexpected error. You can try again or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
