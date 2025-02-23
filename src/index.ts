import Mermaid from "mermaid"
import { getMindMapModules } from "./mindmap"
import { buildNodeTree } from "./node-tree"
import { buildMermaidMindmap } from "./mermaid"

const modules = getMindMapModules()
const tree = buildNodeTree(modules)
const mindmap = buildMermaidMindmap(tree)

const diagramElem = document.querySelector("#diagram")

if (diagramElem != null) {
	Mermaid.render("hmmm", mindmap).then((result) => {
		diagramElem.innerHTML = result.svg
	})
}
