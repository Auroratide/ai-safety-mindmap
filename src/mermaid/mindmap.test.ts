import { test, expect } from "vitest"
import { buildMermaidMindmap } from "./mindmap"
import { stubMarkdown } from "../markdown/test/stub"
import { NodeTree } from "../node-tree"
import { stubFoodyNodeTree } from "../node-tree/test/stub"

test("just root", () => {
	const tree: NodeTree = {
		id: "_root",
		content: stubMarkdown({ title: "Root" }),
		children: {},
	}

	const mermaid = buildMermaidMindmap(tree)

	expect(mermaid).toEqual(`
mindmap
	_root[Root]
	:::_root
	`.trim())
})

test("mindmap diagram built from tree", () => {
	const tree = stubFoodyNodeTree()

	const mermaid = buildMermaidMindmap(tree)

	expect(mermaid).toEqual(`
mindmap
	_root[Food]
	:::_root
		fruit[Fruit]
		:::fruit
			apple[Apple]
			:::apple
			orange[Orange]
			:::orange
		veggie[Veggie]
		:::veggie
			tomato[Tomato]
			:::tomato
			carrot[Carrot]
			:::carrot
	`.trim())
})
