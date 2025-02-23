export type Markdown = {
	html: string,
	attributes: {
		title: string,
		authors?: string[],
		href?: string,
	},
}