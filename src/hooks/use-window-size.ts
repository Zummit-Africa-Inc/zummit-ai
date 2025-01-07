import React from "react"

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = React.useState([0, 0])

	React.useEffect(() => {
		function handleResize() {
			setWindowSize([window.innerWidth, window.innerHeight])
		}
		window.addEventListener("resize", handleResize)
		handleResize()
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowSize
}
