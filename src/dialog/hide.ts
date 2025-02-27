export function hideDialogOnBackdrop() {
	const dialog = document.querySelector<HTMLDialogElement>("#dialog")
	if (dialog == null) return

	const handleBackdropClick = (e: MouseEvent) => {
		const bounds = dialog.getBoundingClientRect()
		const isInDialog = (bounds.top <= e.clientY && e.clientY <= bounds.top + bounds.height && bounds.left <= e.clientX && e.clientX <= bounds.left + bounds.width)

		if (!isInDialog) {
			dialog.close()
		}
	}

	dialog.addEventListener("toggle", (e: ToggleEvent) => {
		if (e.newState === "open") {
			// The timeout prevents a click from immediately happening as the dialog is opened
			// This seems to happen on mobile browsers
			setTimeout(() => {
				dialog.addEventListener("click", handleBackdropClick)
			}, 250)
		} else {
			dialog.removeEventListener("click", handleBackdropClick)
		}
	})
}
