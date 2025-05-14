import { AdminProps, HttpResponse, UserProps } from "@/types"
import { axios } from "@/lib"

export interface CreateUserPayload
	extends Omit<
		UserProps,
		"_id" | "access_token" | "createdAt" | "id" | "subscription" | "updatedAt"
	> {
	password: string
}

export interface CreateAdminPayload
	extends Omit<
		AdminProps,
		"_id" | "access_token" | "createdAt" | "id" | "subscription" | "updatedAt" | "__v"
	> {}

const CreateUser = async (payload: CreateUserPayload) => {
	return axios
		.post<HttpResponse<UserProps>>("/user/signup", payload)
		.then((res) => res.data)
}

const LoginUser = async (email_or_phone_number: string, password: string) => {
	return axios
		.post<HttpResponse<UserProps>>("/user/login", { email_or_phone_number, password })
		.then((res) => res.data)
}

const CreateAdmin = async (payload: CreateAdminPayload) => {
	return axios
		.post<HttpResponse<AdminProps>>("/admin/signup", payload)
		.then((res) => res.data)
}

const LoginAdmin = async (
	full_name: string,
	email_or_phone_number: string,
	password: string
) => {
	return axios
		.post<
			HttpResponse<AdminProps>
		>("/admin/login", { full_name, email_or_phone_number, password })
		.then((res) => res.data)
}

export { CreateUser, LoginUser, CreateAdmin, LoginAdmin }
