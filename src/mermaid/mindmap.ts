import { forEachNode, NodeTree } from "../node-tree"

export function buildMermaidMindmap(tree: NodeTree): string {
	let result = "mindmap"
	forEachNode(tree, (node, depth) => {
		result += "\n" + "\t".repeat(depth + 1) + `${node.id}[${node.content.attributes.title}]` + "\n" + "\t".repeat(depth + 1) + `:::${node.id}`
	})

	return result
}
