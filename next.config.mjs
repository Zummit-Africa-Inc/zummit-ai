/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	transpilePackages: ["use-pyodide"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "http",
				hostname: "dummyimage.com",
			},
			{
				protocol: "http",
				hostname: "miro.medium.com",
			},
			{
				protocol: "https",
				hostname: "cdn.hashnode.com",
			},
			{
				protocol: "https",
				hostname: "www.python.org",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "api.producthunt.com",
			},
		],
	},
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
