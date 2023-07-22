export type User = {
	id: string
	firstName: string
	lastName: string
	email: string
	image: string
}

export type Post = {
	id: string
	user_id: string
	title: string
	content: string
	author: User
	imageUrl: string
	isPublished: boolean
	createdAt: Date | string
	updatedAt: Date | string
}

export type Project = {
	id: string
  title: string
  content: string
  imageUrl: string
  isPublished: boolean
  createdAt: Date | string
}

export type Chat = {
	id: string
	type: "bot" | "user"
	message: string
	createdAt: Date | string
}