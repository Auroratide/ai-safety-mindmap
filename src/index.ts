import Mermaid from "mermaid"
import { getMindMapModules } from "./mindmap"
import { buildNodeTree, forEachNode } from "./node-tree"
import { buildMermaidMindmap } from "./mermaid"
import { showDialog, hideDialogOnBackdrop } from "./dialog"
import { setTransformProperty } from "./mermaid/transform"
import { makeSvgClickable } from "./mermaid/interaction"

const modules = getMindMapModules()
const tree = buildNodeTree(modules)
const mindmap = buildMermaidMindmap(tree)

const diagramElem = document.querySelector("#diagram")

if (diagramElem != null) {
	Mermaid.render("diagram-svg", mindmap).then((result) => {
		diagramElem.innerHTML = result.svg
		forEachNode(tree, (node) => {
			const elem = document.querySelector<SVGElement>(`.${node.id}`)
			makeSvgClickable(elem, node.content.attributes.title, () => showDialog(node))
		})

		diagramElem.querySelectorAll<SVGElement>(".mindmap-node").forEach(setTransformProperty)
	})
}

hideDialogOnBackdrop()
