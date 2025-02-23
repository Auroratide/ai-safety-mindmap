import { test, expect } from "vitest"
import { renderNode, CLOSE_BUTTON } from "./render"
import { NodeTree } from "../node-tree"
import { stubMarkdown } from "../markdown/test/stub"

test("rendering a node as html", () => {
	const node: NodeTree = {
		id: "fruit",
		content: stubMarkdown({
			title: "Fruit Title",
			html: "<p>This is a fruit.</p><p>Fruit is very tasty.</p>",
		}),
		children: {},
	}

	const result = renderNode(node)

	expect(result).toContain(node.content.attributes.title)
	expect(result).toContain(node.content.html)
	expect(result).toContain(CLOSE_BUTTON)
})