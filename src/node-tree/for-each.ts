import { NodeTree } from "./NodeTree"

export function forEachNode(tree: NodeTree, action: (node: NodeTree, depth: number) => void) {
	processNode(tree, 0, action)
}

function processNode(node: NodeTree, depth: number, action: (node: NodeTree, depth: number) => void) {
	action(node, depth)
	Object.values(node.children).forEach((child) => {
		processNode(child, depth + 1, action)
	})
}
