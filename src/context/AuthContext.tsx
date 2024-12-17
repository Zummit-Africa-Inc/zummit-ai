"use client"

import Cookies from "js-cookie"
import React from "react"
import axios from "axios"

import { Maybe, UserProps } from "@/types"

interface AuthContextProps {
	user: UserProps | null // User object or null when not logged in
	loginUser: (user: UserProps) => void
	generatePaymentLink: (data: any) => Promise<any>
}

const defaultContext: AuthContextProps = {
	user: null,
	loginUser: async () => {},
	generatePaymentLink: async () => {},
}

// Create the AuthContext
export const AuthContext = React.createContext<AuthContextProps>(defaultContext)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: React.PropsWithChildren & {}) => {
	const [user, setUser] = React.useState<Maybe<UserProps>>(null)
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	// Login User
	const getUser = (): UserProps => {
		const user: any = localStorage.getItem("user") // Retrieve string from localStorage
		const parsedUser = JSON.parse(user)
		return parsedUser.access_token
	}

	const loginUser = (user: UserProps) => {
		const token = user.access_token
		if (!token) throw new Error("Token not found.")
		Cookies.set("ZUMMIT-TOKEN", token, { expires: 7, sameSite: "Strict" })
		localStorage.setItem("user", JSON.stringify(user))
		setUser(user)
		return user
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

	// Load user from localStorage on mount
	React.useEffect(() => {
		const savedUser = localStorage.getItem("user")
		if (savedUser) {
			setUser(JSON.parse(savedUser))
		}
	}, [])

	// Provide the context
	return (
		<AuthContext.Provider value={{ user, loginUser, generatePaymentLink }}>
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
