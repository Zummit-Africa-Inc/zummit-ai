export type HttpError = {
	response: {
		data: {
			code: number
			error: string
			error_message: string
		}
	}
}

export type QueryParams = {
	[key: string]: string | number
}

export type HttpResponse = {
	error: boolean
	message: string
	data?: any
}
