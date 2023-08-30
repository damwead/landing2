const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  optimizeFonts: false,
  trailingSlash: true,
};

module.exports = nextConfig;
