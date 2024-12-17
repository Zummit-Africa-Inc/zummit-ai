import Cookies from "js-cookie"
import axios from "axios"

const createInstance = () => {
	let instance = axios.create({
		baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	})

	instance.interceptors.request.use((config) => {
		const token = Cookies.get("")
		config.headers.Authorization = `Bearer ${token}`
		return config
	})

	return instance
}

const instance = createInstance()

export { instance as axios }
