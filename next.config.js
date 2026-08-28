/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,

  // Compress all responses (text, JSON, JS, CSS)
  compress: true,

  images: {
    // Serve AVIF first (40% smaller than WebP), fallback to WebP
    formats: ["image/avif", "image/webp"],

    // Cache optimised images for 60 days instead of the default 60 seconds
    minimumCacheTTL: 60 * 60 * 24 * 60,

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },

  // Security + performance headers on every response
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://tagmanager.google.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://plus.unsplash.com https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.google.co.in https://ssl.gstatic.com https://www.facebook.com",
              "connect-src 'self' https://formspree.io https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.google.co.in https://www.facebook.com https://*.facebook.com",
              "frame-src 'self' https://www.googletagmanager.com https://tagmanager.google.com https://*.google.com https://*.google.co.in",
            ].join("; "),
          },
        ],
      },

      // ✅ Keep this
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  }
};
