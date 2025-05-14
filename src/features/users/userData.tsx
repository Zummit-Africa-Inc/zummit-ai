import React, { useContext, useEffect, useState, useRef, useCallback } from "react"
import { debounce } from "lodash"
import { toast } from "sonner"

import { AuthContext } from "@/context/AuthContext"
import { Pagination } from "@/components/shared"
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

interface User {
	id: number
	full_name: string
	email: string
	phone_number: string
	gender: string
	country: string
	createdAt: string
}

interface Data {
	data: User[]
	pagination: {
		pageSize: number
		totalCount: number
		pageCount: number
		currentPage: number
		hasNext: boolean
	}
}

export default function UserData() {
	const { getUsersFrmDb } = useContext(AuthContext)
	const [data, setData] = useState<Data | null>(null)
	const [loading, setLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")

	const { pageSize, totalCount, currentPage } = data?.pagination || {}

	// Fetch users from the database
	const fetchUsersFromDb = useCallback(
		async (searchTerm: string = "", pageNumber: number = 1) => {
			setLoading(true)
			try {
				const response = await getUsersFrmDb(searchTerm, pageNumber)
				if (response.status === "success") {
					setData(response.data)
					console.log(response.data.data)
				}
				setLoading(false)
			} catch (error: any) {
				setLoading(false)
				toast.error(error.message, {
					description: "Unable to load users at this time",
					action: {
						label: "Undo",
						onClick: () => console.log("Undo"),
					},
					position: "top-right",
				})
				console.log("error", error)
			}
		},
		[getUsersFrmDb]
	)

	const handleSearchDebounce = useRef(
		debounce(async (value: string) => {
			fetchUsersFromDb(value, 1)
		}, 300)
	).current

	useEffect(() => {
		return () => {
			handleSearchDebounce.cancel()
		}
	}, [handleSearchDebounce])

	useEffect(() => {
		fetchUsersFromDb("", 1)
	}, [fetchUsersFromDb])

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setSearchTerm(value)
		handleSearchDebounce(value)
	}

	return (
		<div className="w-full px-4">
			<div className="mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center space-y-5">
				<h1 className="py-5 text-center text-xl font-bold">
					WELCOME ZUMMIT TEAM, THIS IS THE LIST OF USERS WE HAVE SO FAR
				</h1>

				<div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
					<input
						type="text"
						placeholder="Find a user"
						className="h-10 w-full max-w-[250px] border-2 py-3 pl-3 text-sm placeholder:text-sm"
						value={searchTerm}
						onChange={handleSearch}
					/>

					<Pagination
						current={currentPage || 1}
						pageSize={pageSize || 10}
						total={totalCount || 0}
						onPageChange={(currentPage) => fetchUsersFromDb(searchTerm, currentPage || 1)}
					/>
				</div>

				<Table className="w-full">
					<TableHeader className="sticky top-0 rounded-sm bg-pink-950 text-white">
						<TableRow>
							<TableHead className="w-[300px]">Full Name</TableHead>
							<TableHead className="w-[200px]">Email</TableHead>
							<TableHead className="">Phone Number</TableHead>
							<TableHead>Gender</TableHead>
							<TableHead>Country</TableHead>
							<TableHead className="text-right">Created at</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{loading ? (
							<TableRow>
								<TableCell colSpan={6} className="text-center">
									Loading...
								</TableCell>
							</TableRow>
						) : data?.data.length ? (
							data.data.map((user) => (
								<TableRow key={user.id}>
									<TableCell className="w-[300px] font-medium">
										{user.full_name.toUpperCase()}
									</TableCell>
									<TableCell className="w-[200px]">{user.email}</TableCell>
									<TableCell className="">{user.phone_number}</TableCell>
									<TableCell className="">{user.gender}</TableCell>
									<TableCell className="">{user.country}</TableCell>
									<TableCell className="text-right">{user.createdAt}</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={6} className="text-center">
									No data found
								</TableCell>
							</TableRow>
						)}
					</TableBody>
					<TableFooter className="sticky bottom-0 bg-white">
						<TableRow>
							<TableCell colSpan={5}>Total</TableCell>
							<TableCell className="text-right">{data?.pagination.totalCount}</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</div>
	)
}
