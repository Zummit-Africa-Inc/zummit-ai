import { useCallback, useEffect, useRef } from "react"

/**
 * A React hook that provides a way to set up a recurring interval.
 *
 * The `useInterval` hook takes a callback function and a delay value, and
 * sets up an interval that calls the callback function every `delay`
 * milliseconds. The hook also returns a `stopInterval` function that can be
 * used to cancel the interval.
 *
 * The hook uses `useEffect` to set up and tear down the interval, and
 * `useRef` to store the latest callback function and interval ID.
 *
 * @param callback - The function to be called at the specified interval.
 * @param delay - The delay in milliseconds between each function call.
 * @returns An object with a `stopInterval` function that can be used to
 * cancel the interval.
 */
export const useInterval = (callback: (() => void) | null, delay: unknown) => {
	const savedCallback = useRef<(() => void) | null | React.MutableRefObject<unknown>>(null)
	const intervalId = useRef<NodeJS.Timeout | null | React.MutableRefObject<unknown>>(null)

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback

		return () => {
			savedCallback.current = null
		}
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		const tick = () => {
			if (typeof savedCallback.current === "function") {
				savedCallback.current()
			}
		}

		if (typeof delay === "number") {
			intervalId.current = setInterval(tick, delay)
		}

		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current as NodeJS.Timeout)
			}
		}
	}, [delay])

	const stopInterval = useCallback(() => {
		savedCallback.current = null
		if (intervalId.current) {
			clearInterval(intervalId.current as NodeJS.Timeout)
			intervalId.current = null
		}
	}, [])

	return { stopInterval }
}
