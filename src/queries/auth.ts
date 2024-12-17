import { HttpResponse, UserProps } from "@/types"
import { axios } from "@/lib"

interface CreateUserPayload
	extends Omit<
		UserProps,
		"_id" | "access_token" | "createdAt" | "id" | "subscription" | "updatedAt"
	> {
	password: string
}

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

export { CreateUser, LoginUser }
