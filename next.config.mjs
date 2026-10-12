/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    // Pin the workspace root (a lockfile exists in a parent directory).
    root: import.meta.dirname,
  },
};

export default nextConfig;
