/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/q1-2026-finland',
        destination: '/2026/finland',
        permanent: true,
      },
      {
        source: '/track-patient-access-1',
        destination: '/2026/finland/patient-access',
        permanent: true,
      },
      {
        source: '/track-care-plans-1',
        destination: '/2026/finland/care-plans',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/q1-2026-finland/:slug',
        destination: '/2026/finland/:slug',
        permanent: true,
      },
    ]
  },  
};

export default nextConfig;
