import { Markdown } from "../Markdown"

export const stubMarkdown = ({
	html = "<p>Content</p>",
	title = "Title",
	authors = undefined,
	href = undefined,
}: Partial<{
	html: string,
	title: string,
	authors: string[],
	href: string,
}> = {}): Markdown => ({
	html,
	attributes: {
		title,
		authors,
		href,
	}
})
