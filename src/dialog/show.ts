export function showDialog(html: string) {
	const dialog = document.querySelector<HTMLDialogElement>("#dialog")
	if (dialog != null) {
		dialog.innerHTML = html
		dialog.showModal()
	}
}
