/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
