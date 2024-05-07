declare module "@radix-ui/themes" {
	import * as RadixThemes from "@radix-ui/themes/dist/cjs"
	export const {
		Avatar,
		DropdownMenu,
		Theme,
		TextField,
		HoverCard,
		Slot,
		Popover,
		ScrollArea,
	}: typeof RadixThemes = require("@radix-ui/themes/dist/cjs/components/avatar")
}

declare module "react-datepicker"
