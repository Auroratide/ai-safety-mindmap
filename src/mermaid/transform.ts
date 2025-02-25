export const TRANSFORM_PROPERTY_NAME = "--g-transform"

/**
 * This mirrors an svg element's transform attribute into a CSS property
 * so we can use it for transitions and such.
 */
export function setTransformProperty(elem: SVGElement) {
	const transform = elem.getAttribute("transform")
	const [x, y] = transform?.matchAll(/[+-]?(\d*\.)?\d+/g)?.map((match) => {
		return match[0] + "px"
	}) ?? [0, 0]
	elem.style.setProperty("--g-transform", `translate(${x}, ${y})`)
}
