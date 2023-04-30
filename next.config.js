/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdna.artstation.com',
      'cdnb.artstation.com',
      'wallpapercave.com',
      'i.ytimg.com',
      'preview.redd.it',
      'lumiere-a.akamaihd.net',
      'media.sketchfab.com',
      'i.pinimg.com',
      'i.ebayimg.com',
      'vignette.wikia.nocookie.net',
    ],
  },
}

module.exports = nextConfig
