import { test, expect } from "vitest"
import { setTransformProperty, TRANSFORM_PROPERTY_NAME } from "./transform"

test("whole numbers", () => {
	const g = document.createElementNS("http://www.w3.org/2000/svg", "g")
	g.setAttribute("transform", "translate(2, 3)")

	setTransformProperty(g)

	expect(g.style.getPropertyValue(TRANSFORM_PROPERTY_NAME)).toEqual("translate(2px, 3px)")
})

test("decimal numbers", () => {
	const g = document.createElementNS("http://www.w3.org/2000/svg", "g")
	g.setAttribute("transform", "translate(2.654, 3.123)")

	setTransformProperty(g)

	expect(g.style.getPropertyValue(TRANSFORM_PROPERTY_NAME)).toEqual("translate(2.654px, 3.123px)")
})

test("negative numbers", () => {
	const g = document.createElementNS("http://www.w3.org/2000/svg", "g")
	g.setAttribute("transform", "translate(-5, -11)")

	setTransformProperty(g)

	expect(g.style.getPropertyValue(TRANSFORM_PROPERTY_NAME)).toEqual("translate(-5px, -11px)")
})
