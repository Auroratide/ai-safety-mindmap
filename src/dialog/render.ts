import { NodeTree } from "../node-tree"

export const CLOSE_BUTTON = '<form method="dialog"><button>Close</button></form>'

export function renderNode(node: NodeTree): string {
	return `
		<header><p>${node.content.attributes.title}</p></header>
		<section>${node.content.html}</section>
		<footer>${CLOSE_BUTTON}</footer>
	`
}
