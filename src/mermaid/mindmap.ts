import { NodeTree } from "../node-tree"

export function buildMermaidMindmap(tree: NodeTree): string {
	return "mindmap" + addNode(1, tree)
}

// recursive
function addNode(depth: number, node: NodeTree): string {
	const thisNode = "\n" + "\t".repeat(depth) + `${node.id}[${node.content.attributes.title}]` + "\n" + "\t".repeat(depth) + `:::${node.id}`
	const childNodes = Object.values(node.children).map((child) => addNode(depth + 1, child)).join("")

	return thisNode + childNodes
}
