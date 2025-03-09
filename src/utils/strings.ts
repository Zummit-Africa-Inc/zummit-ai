import DOMPurify from "dompurify"

import type { QueryParams } from "@/types/http"
import { SearchResultProps } from "@/types/search"

export const sanitizeHtml = (html: string) => {
	return {
		__html: DOMPurify.sanitize(html),
	}
}

export const encodeQueryParams = (query: QueryParams) => {
	return Object.keys(query)
		.filter((key) => query[key] !== null && query[key] !== undefined && query[key] !== "")
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`)
		.join("&")
}

export const getInitials = (value: string) =>
	value
		.split(" ")
		.map((word) => word.substring(0, 1))
		.join("")

export const sanitize = (value: string) => value.toLowerCase().split("_").join(" ")

export const normalizePath = (path: string) => {
	let normalPath: string
	if (path.split("/").length > 2) {
		const pathParts = `/${path.split("/")[1]}/${path.split("/")[2]}`
		normalPath = pathParts
	} else {
		normalPath = path
	}
	return normalPath
}

export const decodeQueryParams = (queryString: string) => {
	const urlSearchParams = new URLSearchParams(queryString)
	const params: Record<string, string> = {}

	for (const [key, value] of urlSearchParams.entries()) {
		params[key] = value
	}

	return params
}

export const capitalize = (value: string) =>
	value
		.split(" ")
		.map((word) => word.charAt(0) + word.slice(1).toLowerCase())
		.join(" ")

/**
 * This function returns the duration of the video in hours and minutes
 *
 * @param duration duration of the video
 * @returns
 */
export const getDuration = (duration: number | null) => {
	let videoDuration
	if (duration === null) {
		videoDuration = "00h :00m :00s"
		return
	}
	const hours = Math.floor(duration / 3600)
	const minutes = Math.floor((duration % 3600) / 60)
	const secs = Math.floor(duration % 60)

	const minutesStr = `${minutes.toString().padStart(2, "0")}:`
	const secondsStr = secs.toString().padStart(2, "0")

	if (hours > 0) {
		const hoursStr = `${hours.toString().padStart(2, "0")}:`
		videoDuration = `${hoursStr}${minutesStr}${secondsStr}`
	}

	videoDuration = `${minutesStr}${secondsStr}`

	return videoDuration
}

export const getDurationInMinutes = (time: number) => Math.floor((time % 3600) / 60)

export const createClassname = (value: string) => value.split(" ").join("-").toLowerCase()

export const getExtendedTime = (start: Date | string, end: Date | string) => {
	const startDate = new Date(start)
	const endDate = new Date(end)
	const difference = endDate.getTime() - startDate.getTime()

	const days = Math.floor(difference / (1000 * 60 * 60 * 24))
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

	return `${days}d ${hours}hr ${minutes}mins`
}

export const getITemFromSearch = (result: SearchResultProps[], query: string) => {
	return result.find((item) => item.title.toLowerCase().includes(query.toLowerCase()))
}

export function urlify(text: string): string {
	const urlRegex = /(https?:\/\/[^\s]+)/g
	return text.replace(urlRegex, (url) => {
		return "<a href=" + url + " target='_blank' rel='noreferrer noopener'>" + url + "</a>"
	})
}
