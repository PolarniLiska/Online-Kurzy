/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: '/',
  trailingSlash: true, // Uloží HTML soubory do složek místo kořenového adresáře
  images: {
    unoptimized: true, // Vypne Next.js optimalizaci obrázků
  },
};

module.exports = nextConfig;
