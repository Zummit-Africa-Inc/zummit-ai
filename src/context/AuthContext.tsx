import React, { createContext, useState, ReactNode } from "react"

interface User {
	id: string
	name: string
	email: string
}

interface AuthContextProps {
	user: User | null // user is an object or null when not logged in
	setUser: React.Dispatch<React.SetStateAction<User>> // function to update user
}
// Define the type for the context value

// Create the AuthContext
export const AuthContext = createContext<AuthContextProps | null>(null)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User>({ id: "jeddnik", name: "sjdnd", email: "dhdjdj" })

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
