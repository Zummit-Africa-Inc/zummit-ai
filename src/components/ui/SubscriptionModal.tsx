interface Props {
	close: () => void
}

const SubscriptionModal = (props: Props) => {
	return (
		<div
			onClick={props.close}
			className="fixed left-0 top-0 grid h-screen w-screen place-items-center bg-black/50">
			<div
				onClick={(e) => e.stopPropagation()}
				className="flex w-full flex-col items-center rounded-lg bg-white p-4 md:w-[500px]">
				<p className="text-2xl font-semibold text-[#333]">
					Subscribe to our newsletter
				</p>
			</div>
		</div>
	)
}

export default SubscriptionModal
