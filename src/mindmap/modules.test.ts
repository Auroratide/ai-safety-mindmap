import { test, expect } from "vitest"
import { getMindMapModules } from "./modules"

test("path prefix is removed", () => {
	const modules = getMindMapModules()

	Object.keys(modules).forEach((it) => {
		expect(it.includes("..")).toBe(false)
		expect(it.includes("mindmap")).toBe(false)
	})
})
