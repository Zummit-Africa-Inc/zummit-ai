type AnimationType = "inertia" | "just" | "keyframes" | "spring" | "tween"
type Direction = "up" | "down" | "left" | "right"

export const zoomIn = (delay: number, duration: number) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}

export const spinIn = (
	type: AnimationType,
	delay: number,
	duration: number
) => {
	return {
		hidden: {
			scale: 0.5,
			opacity: 0,
			rotate: 180,
		},
		show: {
			scale: 1,
			opacity: 1,
			rotate: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
			},
		},
	}
}

export const slideIn = (
	direction: Direction,
	type: AnimationType,
	delay: number,
	duration: number
) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}

export const fadeIn = (
	direction: Direction,
	type: AnimationType,
	delay: number,
	duration: number
) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}
