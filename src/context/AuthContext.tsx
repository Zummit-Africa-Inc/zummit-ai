"use client"

import Cookies from "js-cookie"
import React from "react"
import axios from "axios"

import { AdminProps, Maybe, UserProps } from "@/types"

interface AuthContextProps {
	user: UserProps | null // User object or null when not logged in
	admin: AdminProps | null // admin object or null when not logged in
	loginUser: (user: UserProps) => void
	loginAdmin: (admin: AdminProps) => void
	generatePaymentLink: (data: any) => Promise<any>
	getUsersFrmDb: (searchTerm: string, pageNumber: number) => Promise<any>
}

const defaultContext: AuthContextProps = {
	user: null,
	admin: null,
	loginUser: async () => {},
	loginAdmin: async () => {},
	generatePaymentLink: async () => {},
	getUsersFrmDb: async () => {},
}

// Create the AuthContext
export const AuthContext = React.createContext<AuthContextProps>(defaultContext)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: React.PropsWithChildren & {}) => {
	const [user, setUser] = React.useState<Maybe<UserProps>>(null)
	const [admin, setAdmin] = React.useState<Maybe<AdminProps>>(null)

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	// const baseUrl = "https://zummitaibackend-production.up.railway.app"

	// Login User
	const getUser = (): UserProps => {
		const user: any = localStorage.getItem("user") // Retrieve string from localStorage
		const parsedUser = JSON.parse(user)
		return parsedUser.access_token
	}

	const getAdminToken = (): AdminProps => {
		const admin: any = localStorage.getItem("admin") // Retrieve string from localStorage
		const parsedAdmin = JSON.parse(admin)
		return parsedAdmin.access_token
	}

	const loginUser = (user: UserProps) => {
		const token = user.access_token
		if (!token) throw new Error("Token not found.")
		Cookies.set("ZUMMIT-TOKEN", token, { expires: 7, sameSite: "Strict" })
		localStorage.setItem("user", JSON.stringify(user))
		setUser(user)
		return user
	}

	const loginAdmin = (admin: AdminProps) => {
		const token = admin.access_token
		if (!token) throw new Error("Token not found.")
		Cookies.set("ZUMMIT-ADMIN-TOKEN", token, { expires: 7, sameSite: "Strict" })
		localStorage.setItem("admin", JSON.stringify(admin))
		setAdmin(admin)
		return admin
	}

	const generatePaymentLink = async ({
		title,
		convertedPrice,
	}: {
		title: string
		convertedPrice: number
	}) => {
		const data = {
			amount: convertedPrice,
			narration: `Deduction for ${title} from zummit africa training`,
			narration_id: user?.id,
		}

		const token = getUser()
		try {
			const results = await axios.post(`${baseUrl}/transaction/gen-payment-link`, data, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`, // Include the Bearer token in the headers
					"Content-Type": "application/json",
				},
			})
			return results.data
		} catch (error: any) {
			console.error("Signup error:", error.message)
			throw error // Rethrow the error for the caller to handle
		}
	}

	const getUsersFrmDb = async (searchTerm: string, pageNumber: number) => {
		const adminToken = getAdminToken()

		if (!baseUrl) throw new Error("Base URL is not defined.")

		try {
			const results = await axios.get(
				`${baseUrl}/admin/users/fetch?limit=20&page=${pageNumber}&search=${searchTerm}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${adminToken}`, // Include the Bearer token in the headers
						"Content-Type": "application/json",
					},
				}
			)
			return results.data
		} catch (error: any) {
			console.error("fetch user error:", error.toString())
			throw error
		}
	}

	// Load user or admin from localStorage on mount
	React.useEffect(() => {
		const savedUser = localStorage.getItem("user")
		const savedAdmin = localStorage.getItem("admin")

		if (savedUser) {
			setUser(JSON.parse(savedUser)) // Set user state
		}

		if (savedAdmin) {
			setAdmin(JSON.parse(savedAdmin)) // Set admin state
		}
	}, [])

	// Provide the context
	return (
		<AuthContext.Provider
			value={{ user, admin, loginUser, loginAdmin, generatePaymentLink, getUsersFrmDb }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const ctx = React.useContext(AuthContext)
	if (!ctx) {
		throw new Error("useAuthContext must be used within an AuthContextProvider")
	}
	return ctx
}
