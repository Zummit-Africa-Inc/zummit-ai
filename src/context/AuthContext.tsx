"use client"

import axios from "axios"
import React, { createContext, useState, ReactNode, useEffect } from "react"

interface User {
	id: string
	full_name: string
	email: string
}

interface AuthContextProps {
	user: User | null // User object or null when not logged in
	setUser: React.Dispatch<React.SetStateAction<User | null>>
	createUser: (formData: any) => Promise<any>
	loginUser: (formData: any) => Promise<any>
}

const defaultContext: AuthContextProps = {
	user: null,
	setUser: () => {},
	createUser: async () => {},
	loginUser: async () => {},
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextProps>(defaultContext)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	// Login User
	const loginUser = async (formData: any): Promise<any> => {
		if (!baseUrl) throw new Error("Base URL is not defined.")
		try {
			const results = await axios.post(`${baseUrl}/user/login`, formData, {
				headers: { "Content-Type": "application/json" },
			})
			const { id, full_name, email } = results.data.data
			const userData = { id, full_name, email }
			localStorage.setItem("user", JSON.stringify(userData))
			setUser(results.data.data)
			return results.data
		} catch (error: any) {
			console.error("Login error:", error.message)
			throw error
		}
	}

	// Create User
	const createUser = async (formData: any): Promise<any> => {
		if (!baseUrl) throw new Error("Base URL is not defined.")
		try {
			const results = await axios.post(`${baseUrl}/user/signup`, formData, {
				headers: { "Content-Type": "application/json" },
			})
			const { id, full_name, email } = results.data.data
			const userData = { id, full_name, email }
			localStorage.setItem("user", JSON.stringify(userData))
			setUser(results.data.data)
			return results.data
		} catch (error: any) {
			console.error("Signup error:", error.message)
			throw error // Rethrow the error for the caller to handle
		}
	}

	// Load user from localStorage on mount
	useEffect(() => {
		const savedUser = localStorage.getItem("user")
		if (savedUser) {
			setUser(JSON.parse(savedUser))
		}
	}, [])

	// Provide the context
	return (
		<AuthContext.Provider value={{ user, setUser, createUser, loginUser }}>
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
