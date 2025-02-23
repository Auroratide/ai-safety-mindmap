import { test, expect } from "vitest"
import { buildMermaidMindmap } from "./mindmap"
import { stubMarkdown } from "../markdown/test/stub"
import { NodeTree } from "../node-tree"

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
	const tree: NodeTree = {
		id: "_root",
		content: stubMarkdown({ title: "Root" }),
		children: {
			fruit: {
				id: "fruit",
				content: stubMarkdown({ title: "Fruit" }),
				children: {
					apple: {
						id: "apple",
						content: stubMarkdown({ title: "Apple" }),
						children: {},
					},
					orange: {
						id: "orange",
						content: stubMarkdown({ title: "Orange" }),
						children: {},
					},
				},
			},
			veggie: {
				id: "veggie",
				content: stubMarkdown({ title: "Veggie" }),
				children: {
					tomato: {
						id: "tomato",
						content: stubMarkdown({ title: "Tomato" }),
						children: {},
					},
					carrot: {
						id: "carrot",
						content: stubMarkdown({ title: "Carrot" }),
						children: {},
					},
				},
			},
		},
	}

	const mermaid = buildMermaidMindmap(tree)

	expect(mermaid).toEqual(`
mindmap
	_root[Root]
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
