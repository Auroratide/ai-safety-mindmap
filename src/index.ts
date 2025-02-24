import Mermaid from "mermaid"
import { getMindMapModules } from "./mindmap"
import { buildNodeTree, forEachNode } from "./node-tree"
import { buildMermaidMindmap } from "./mermaid"
import { showDialog } from "./dialog"

const modules = getMindMapModules()
const tree = buildNodeTree(modules)
const mindmap = buildMermaidMindmap(tree)

const diagramElem = document.querySelector("#diagram")

if (diagramElem != null) {
	Mermaid.render("diagram-svg", mindmap).then((result) => {
		diagramElem.innerHTML = result.svg
		forEachNode(tree, (node) => {
			const elem = document.querySelector(`.${node.id}`)
			elem?.addEventListener("click", () => {
				showDialog(node)
			})

			// TODO: make tabbable and accessible
			// elem?.setAttribute("tabindex", "0")
			// elem?.setAttribute("role", "button")
		})
	})
}
