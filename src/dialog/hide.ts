export function hideDialogOnBackdrop() {
	const dialog = document.querySelector<HTMLDialogElement>("#dialog")

	if (dialog != null) {
		dialog.addEventListener("click", (e: MouseEvent) => {
			const bounds = dialog.getBoundingClientRect()
			const isInDialog = (bounds.top <= e.clientY && e.clientY <= bounds.top + bounds.height && bounds.left <= e.clientX && e.clientX <= bounds.left + bounds.width)

			if (!isInDialog) {
				dialog.close()
			}
		})
	}
}
