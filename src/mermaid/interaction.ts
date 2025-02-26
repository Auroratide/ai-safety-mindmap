export function makeSvgClickable(elem: SVGElement | undefined | null, label: string, callback: () => void) {
	elem?.addEventListener("pointerdown", (e: PointerEvent) => {
		if (e.button === LEFT_CLICK) {
			callback()
		}
	})

	// I'd prefer to use this, but the scaling animation causes clicks to miss
	// very often, therefore we have to use pointerdown.
	// elem?.addEventListener("click", () => {
	// 	callback()
	// })

	elem?.addEventListener("keydown", (e: KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault()
			callback()
		}
	})

	elem?.setAttribute("tabindex", "0")
	elem?.setAttribute("role", "button")
	elem?.setAttribute("aria-label", label)
}

const LEFT_CLICK = 0