import type { NextConfig } from "next";

const sectionRedirects = ["home", "about", "work", "skills", "experience", "certificates", "contact"].map(
  (section) => ({
    source: `/${section}`,
    destination: `/#${section}`,
    permanent: false,
  })
);

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async redirects() {
    return sectionRedirects;
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
