import { CaretLeft, CaretRight } from "@phosphor-icons/react"

// import { DOTS, usePagination } from "hooks"

interface Props {
	current: number
	onPageChange: (value: number) => void
	pageSize: number
	total: number
}

const Pagination = (props: Props) => {
	const totalPages = Math.ceil(props.total / props.pageSize)

	const onPrevious = () => {
		if (props.current > 1) {
			props.onPageChange(props.current - 1)
		}
	}

	const onNext = () => {
		if (props.current < totalPages) {
			props.onPageChange(props.current + 1)
		}
	}

	const renderPageNumbers = () => {
		const pageNumbers = []
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					onClick={() => props.onPageChange(i)}
					className={`flex h-[33px] w-[29px] cursor-pointer items-center justify-center rounded-[5px] font-bold ${
						props.current === i ? "bg-black text-white" : "text-ash-200"
					}`}>
					{i}
				</li>
			)
		}
		return pageNumbers
	}

	return (
		<div className="flex select-none items-center gap-[202px] font-work">
			<button
				onClick={onPrevious}
				disabled={props.current === 1}
				className="flex w-[126px] items-center gap-2 border-2 border-primary/[0.2] px-[18px] py-[10px] text-ash-200 disabled:cursor-not-allowed disabled:bg-ash-200 disabled:text-black">
				<CaretLeft />
				Previous
			</button>
			<ul className="flex items-center gap-2">{renderPageNumbers()}</ul>
			<button
				onClick={onNext}
				disabled={props.current === totalPages}
				className="flex w-[126px] items-center gap-2 border-2 border-primary/[0.2] px-[18px] py-[10px] text-ash-200 disabled:cursor-not-allowed disabled:bg-ash-200 disabled:text-black">
				Next
				<CaretRight />
			</button>
		</div>
	)
}

export default Pagination
