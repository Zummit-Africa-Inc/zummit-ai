import { NextURL } from "next/dist/server/web/next-url"
import { NextRequest, NextResponse } from "next/server"

export const config = {
	matcher: ["/login", "/signup"],
	name: "middleware",
}

export function middleware(req: NextRequest) {
	const requestHeaders = new Headers(req.headers) // Init new request headers
	requestHeaders.set("x-next-pathname", req.nextUrl.pathname) // Set the new header for pathname

	const hasToken = req.cookies.has("ZUMMIT-TOKEN")
	const url = req.nextUrl.clone() // Clone the URL to modify it

	const redirectResponse = (url: string | NextURL) => {
		const response = NextResponse.redirect(url)
		response.headers.set("x-middleware-cache", "no-cache") // !FIX: Disable caching
		return response
	}

	// If user is not logged in and is on dashboard, redirect to signin
	if (!hasToken && url.pathname.startsWith("/")) {
		url.pathname = "/"
		// return redirectResponse(url)
	}

	// If user is logged in and is on signin or signup, redirect to dashboard
	if (hasToken && (url.pathname === "/login" || url.pathname === "/signup")) {
		url.pathname = "/"
		return redirectResponse(url)
	}

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	})
}
