import { NodeTree } from "../node-tree"

export function showDialog(node: NodeTree) {
	const dialog = document.querySelector<HTMLDialogElement>("#dialog")
	const dialogTitle = document.querySelector("#dialog-title")
	const dialogContent = document.querySelector("#dialog-content")
	if (dialog != null && dialogTitle != null && dialogContent != null) {
		dialogTitle.textContent = node.content.attributes.title
		dialogContent.innerHTML = node.content.html
		dialog.showModal()
	}
}
