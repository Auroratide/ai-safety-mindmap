import { Markdown } from "../markdown"
import { NodeTree } from "../node-tree"

export function showDialog(node: NodeTree) {
	const dialog = document.querySelector<HTMLDialogElement>("#dialog")
	const dialogTitle = document.querySelector("#dialog-title")
	const dialogContent = document.querySelector("#dialog-content")
	if (dialog != null && dialogTitle != null && dialogContent != null) {
		dialogTitle.textContent = node.content.attributes.title
		dialogContent.innerHTML = renderContent(node.content)
		dialog.showModal()
	}
}

function renderContent({ attributes, html }: Markdown) {
	const authors = dtdd("Authors", attributes.authors?.join(", "))
	const published = dtdd("Published", `${attributes.month ?? ""} ${attributes.year ?? ""}`.trim())
	const link = dtdd("Link", a("Original Article", attributes.href))

	return dl(authors + published + link) + html
}

function dl(value: string | undefined): string {
	if (value != null && value !== "") {
		return `<dl>${value}</dl>`
	} else {
		return ""
	}
}

function dtdd(label: string, value: string | undefined): string {
	if (value != null && value !== "") {
		return `<dt>${label}</dt><dd>${value}</dd>`
	} else {
		return ""
	}
}

function a(label: string, href: string | undefined): string {
	if (href != null && href !== "") {
		return `<a href="${href}">${label}</a>`
	} else {
		return ""
	}
}
