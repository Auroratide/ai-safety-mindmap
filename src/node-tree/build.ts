import { Markdown } from "../markdown"
import { NodeTree } from "./NodeTree"

export function buildNodeTree(modules: Record<string, Markdown>): NodeTree {
	const [rootEntry, ...restEntries] = Object.entries(modules)
		.map((it): [string[], Markdown] => [getNodePath(it[0]), it[1]])
		.toSorted(byPathLength)

	const root: NodeTree = {
		id: "_root",
		content: rootEntry[1],
		children: {},
	}

	restEntries.forEach(([path, content]) => {
		const node: NodeTree = {
			id: path.at(-1)!,
			content: content,
			children: {},
		}

		const parent = path.slice(0, -1).reduce(((target, cur) => target?.children[cur]), root)
		const child = path.at(-1)!
		parent.children[child] = node
	})

	return root
}

function getNodePath(filePath: string): string[] {
	const nodePath = filePath.split("/")
	const last = nodePath.at(-1)!

	if (last.endsWith(".md")) {
		nodePath[nodePath.length - 1] = last.slice(0, last.length - 3) ?? ""
	}

	if (nodePath.at(-1) === "index") {
		nodePath.pop()
	}

	return nodePath
}

const byPathLength = (a: [string[], Markdown], b: [string[], Markdown]): number =>
	a[0].join("").length - b[0].join("").length
