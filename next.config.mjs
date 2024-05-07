/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { isServer }) => {
		config.resolve.alias.canvas = false
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [{ name: "removeViewBox", active: false }],
						},
					},
				},
			],
		})

		return config
	},
}

export default nextConfig
