import { Month } from "./month"

export type Markdown = {
	html: string,
	attributes: {
		title: string,
		authors?: string[],
		href?: string,
		month?: Month,
		year?: number,
	},
}
