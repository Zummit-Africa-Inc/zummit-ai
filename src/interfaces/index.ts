export interface ContactFormDto {
	email: string
	fullName: string
	message: string
	phone: string
	subject: string
}

export interface PaginationDto<T> {
	data: T[]
	sort: string[]
	meta: {
		currentPage: number
		itemsPerPage: number
		totalItems: number
		totalPages: number
	}
}
