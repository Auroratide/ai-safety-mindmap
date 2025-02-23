import { test, expect } from "vitest"
import { forEachNode } from "./for-each"
import { stubFoodyNodeTree } from "./test/stub"

test("each node is processed", () => {
	const tree = stubFoodyNodeTree()

	let result = ""
	forEachNode(tree, (node, depth) => {
		result += `${depth}:${node.content.attributes.title} `
	})

	expect(result).toEqual("0:Food 1:Fruit 2:Apple 2:Orange 1:Veggie 2:Tomato 2:Carrot ")
})
