interface Props {
	className?: string
}

const Spinner = (props: Props) => {
	return (
		<div className={`aspect-[1/1] w-[20px] animate-spin rounded-full border-2 border-white border-b-transparent ${props.className}`}></div>
	)
}

export default Spinner
