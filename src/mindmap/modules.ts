import { Markdown } from "../markdown"

export function getMindMapModules(): Record<string, Markdown> {
	const prefix = "../../mindmap/"
	const modules: Record<string, Markdown> = import.meta.glob("../../mindmap/**/*.md", { eager: true })

	return Object.entries(modules).reduce((all, [id, markdown]) => ({
		...all,
		[id.slice(prefix.length)]: markdown
	}), {} as Record<string, Markdown>)
}
