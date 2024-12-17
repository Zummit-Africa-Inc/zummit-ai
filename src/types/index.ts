export type Maybe<T> = T | null

export type Undefined<T> = T | undefined

export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}

export type ValueOf<T> = T[keyof T]

export type NonEmptyArray<T> = [T, ...T[]]

export type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never

export type HttpResponse<T> = {
	code: number
	message: string
	status: string
	data: T
}

export type Node = {
	_id: string
	createdAt: Date | string
	id: string
	updatedAt: Date | string
}

export type UserProps = Node & {
	access_token: string
	country: string
	email: string
	full_name: string
	gender: string
	id: string
	phone_number: string
	subscription: string
}
