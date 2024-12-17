import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"
import React from "react"

interface Props {
	current: number
	onPageChange: (page: number) => void
	pageSize: number
	total: number
}

export const Pagination = (props: Props) => {
	const { current, onPageChange, pageSize, total } = props

	const totalPages = Math.ceil(total / pageSize)

	const goToPrevious = () => {
		if (current > 1) {
			return onPageChange(current - 1)
		}
	}
	const goToNext = () => {
		if (current < totalPages) {
			onPageChange(current + 1)
		}
	}

	const renderPageButton = (index: number) => (
		<button
			key={index}
			onClick={() => onPageChange(index)}
			className={`grid size-8 place-items-center rounded text-sm font-medium ${current === index ? "bg-neutral-900 text-white" : "text-neutral-900"}`}>
			{index}
		</button>
	)

	const renderButtons = () => {
		const numbers = []
		const showEllipsis = totalPages > 5
		const maxVisiblePages = 5

		if (showEllipsis) {
			numbers.push(renderPageButton(1))

			let start = Math.max(2, current - Math.floor(maxVisiblePages / 2))
			let end = Math.min(start + maxVisiblePages - 2, totalPages - 1)

			if (end === totalPages - 1) {
				start = Math.max(2, end - maxVisiblePages + 2)
			}

			if (start > 2) {
				numbers.push(
					<span key="ellipsis-start" className="px-2">
						...
					</span>
				)
			}

			for (let i = start; i <= end; i++) {
				numbers.push(renderPageButton(i))
			}

			if (end < totalPages - 1) {
				numbers.push(
					<span key="ellipsis-end" className="px-2">
						...
					</span>
				)
			}

			numbers.push(renderPageButton(totalPages))
		} else {
			for (let i = 1; i <= totalPages; i++) {
				numbers.push(renderPageButton(i))
			}
		}
		return numbers
	}

	return (
		<div className="flex w-full items-center justify-center gap-[120px]">
			<button onClick={goToPrevious} className="flex h-[21px] w-fit items-center gap-2">
				<RiArrowLeftLine className="size-5" />
				Previous
			</button>
			<div className="flex items-center justify-center gap-4">{renderButtons()}</div>
			<button onClick={goToNext} className="flex h-[21px] w-fit items-center gap-2">
				Next
				<RiArrowRightLine className="size-5" />
			</button>
		</div>
	)
}
