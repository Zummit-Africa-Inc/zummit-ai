import { CurrencyProps } from "@/types"

export const formatDate = (date: Date | string) => {
	return new Intl.DateTimeFormat("en-NG", {
		day: "numeric",
		month: "short",
		year: "2-digit",
	}).format(new Date(date))
}

export const formatCurrency = ({ amount, currency }: CurrencyProps) => {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount)
}
