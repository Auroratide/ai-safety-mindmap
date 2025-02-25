import Mermaid from "mermaid"
import { getMindMapModules } from "./mindmap"
import { buildNodeTree, forEachNode } from "./node-tree"
import { buildMermaidMindmap } from "./mermaid"
import { showDialog } from "./dialog"
import { setTransformProperty } from "./mermaid/transform"

const modules = getMindMapModules()
const tree = buildNodeTree(modules)
const mindmap = buildMermaidMindmap(tree)

const diagramElem = document.querySelector("#diagram")

if (diagramElem != null) {
	Mermaid.render("diagram-svg", mindmap).then((result) => {
		diagramElem.innerHTML = result.svg
		forEachNode(tree, (node) => {
			const elem = document.querySelector(`.${node.id}`)
			elem?.addEventListener("pointerdown", () => {
				showDialog(node)
			})

			// TODO: make tabbable and accessible
			// elem?.setAttribute("tabindex", "0")
			// elem?.setAttribute("role", "button")
		})

		diagramElem.querySelectorAll<SVGElement>(".mindmap-node").forEach(setTransformProperty)
	})
}
