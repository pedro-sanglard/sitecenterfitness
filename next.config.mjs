/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estatico para maxima performance e hospedagem simples (CDN / static host)
  output: "export",
  reactStrictMode: true,
  images: {
    // next/image em modo export requer otimizacao desligada (sem servidor de imagem)
    unoptimized: true,
  },
};

export default nextConfig;
