/**
 * A union type representing a value that is either of type `T` or `null`.
 * This is commonly used to represent optional values.
 */
export type Maybe<T> = T | null

/**
 * A union type representing a value that is either of type `T` or `undefined`.
 * This is commonly used to represent optional values.
 */
export type Undefined<T> = T | undefined

/**
 * A type that represents an exact copy of the object type `T`, where all properties are required.
 * This is useful for ensuring that an object conforms exactly to a given shape.
 *
 * @template T - The object type to be made exact.
 */
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

/**
 * Creates a new type with specified properties made optional from an existing type.
 *
 * @template T - The source type from which to create the new type
 * @template K - A union of keys from T that should be made optional
 *
 * @example
 * interface User {
 *   name: string;
 *   age: number;
 *   email: string;
 * }
 *
 * type PartialUser = MakeOptional<User, 'age' | 'email'>;
 * // Result: { name: string; age?: number | null | undefined; email?: string | null | undefined; }
 */
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}

/**
 * Creates a new type by making specified properties of an existing type optional.
 * @template T - The original type.
 * @template K - Keys of T to make optional using Maybe type.
 * @returns A new type where specified properties are wrapped in Maybe type while preserving other properties.
 * @example
 * type User = { name: string, age: number };
 * type OptionalAge = MakeMaybe<User, 'age'>;
 * // Results in: { name: string, age?: number | null | undefined }
 */
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}

/**
 * Extracts the union type of all value types in an object type.
 *
 * @template T - The object type to extract values from
 * @returns Union type of all possible values in T
 *
 * @example
 * ```typescript
 * type Colors = {
 *   primary: 'red',
 *   secondary: 'blue'
 * }
 * type ColorValues = ValueOf<Colors> // 'red' | 'blue'
 * ```
 */
export type ValueOf<T> = T[keyof T]

/**
 * Represents an array that is guaranteed to have at least one element.
 *
 * @template T - The type of elements in the array
 *
 * @example
 * // Valid usage:
 * const nonEmpty: NonEmptyArray<number> = [1, 2, 3];
 * const singleElement: NonEmptyArray<string> = ["hello"];
 *
 * // Invalid usage:
 * // const empty: NonEmptyArray<number> = []; // Type error
 */
export type NonEmptyArray<T> = [T, ...T[]]

/**
 * Constructs a new type that is a union of the elements in the provided array type `U`, if and only if the element type `T` is a member of the array.
 *
 * @template T - The element type to check for inclusion in the array type `U`.
 * @template U - The array type to check for the presence of `T`.
 * @returns The array type `U` if `T` is a member, otherwise `never`.
 *
 * @example
 * type Colors = 'red' | 'green' | 'blue';
 * type ValidColors = MustInclude<'red', Colors[]>; // Colors[]
 * type InvalidColors = MustInclude<'purple', Colors[]>; // never
 */
export type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never

export type HttpResponse<T> = {
	code: number
	message: string
	status: string
	data: T
}

export type HttpError = {
	response: {
		data: {
			code: number
			data: null
			message: string
			status: string
		}
		status: number
		statusText: string
	}
	stack: string
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

export type AdminProps = Node & {
	_id: string
	full_name: string
	email: string
	password: string
	__v: number
	access_token: string
	id: string
}
