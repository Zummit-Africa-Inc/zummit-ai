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
			BASE_URL: string
			NEXT_PUBLIC_BASE_URL: string
			NEXT_PUBLIC_FACEBOOK_PIXEL_ID: string
			NEXT_PUBLIC_GANALYTICS_ID: string
			NEXT_PUBLIC_POSTHOG_KEY: string
			NEXT_PUBLIC_POSTHOG_HOST: string
			NODE_ENV: "development" | "production"
		}
	}
}

export {}
