export const requiredEnvs = [
	"BASE_URL",
	"NEXT_PUBLIC_BASE_URL",
	"NEXT_PUBLIC_FACEBOOK_PIXEL_ID",
	"NEXT_PUBLIC_GANALYTICS_ID",
	"NEXT_PUBLIC_POSTHOG_KEY",
	"NEXT_PUBLIC_POSTHOG_HOST",
	"NODE_ENV",
] as const

type RequiredEnvs = (typeof requiredEnvs)[number]

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Readonly<Record<RequiredEnvs, string>> {
			BASE_URL: "https://zummitaibackend-production.up.railway.app"
			NEXT_PUBLIC_BASE_URL: "https://zummitaibackend-production.up.railway.app"
			NEXT_PUBLIC_FACEBOOK_PIXEL_ID: "1307744033479340"
			NEXT_PUBLIC_GANALYTICS_ID: string
			NEXT_PUBLIC_POSTHOG_KEY: string
			NEXT_PUBLIC_POSTHOG_HOST: string
			NODE_ENV: "development" | "production"
		}
	}
}

export {}
