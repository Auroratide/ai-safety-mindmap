import { Markdown } from "../markdown"

export type NodeTree = {
	id: string,
	content: Markdown,
	children: Record<string, NodeTree>,
}