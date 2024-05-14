import axios from "axios"

export interface FormDto {
	name: string
	email: string
	country: string
	previous_experience: string
	interest: string
	message: string
}

type CountryProps = {
	iso2: string
	iso3: string
	country: string
}

export const getCountries = async (): Promise<CountryProps[]> =>
	axios
		.get("https://countriesnow.space/api/v0.1/countries")
		.then((res) => res.data)
		.then((data) => data?.data)

export const submitForm = async (payload: FormDto) => axios.post("/api/apply", payload)
