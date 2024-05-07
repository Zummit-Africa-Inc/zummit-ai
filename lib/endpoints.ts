const baseUrl = ""

export const endpoints = (param?: string, query?: string) => {
	const auth = {
		signin: `${baseUrl}/auth/signin`,
		signup: `${baseUrl}/auth/signup`,
		google: `${baseUrl}/auth/google`,
		me: `${baseUrl}/auth/me`,
	}

	const projs = {
		create: `${baseUrl}/projects`,
		all: `${baseUrl}/projects?${query}`,
		one: `${baseUrl}/projects/${param}`,
	}

	return { auth, projs }
}
