import { test, expect } from "vitest"
import { buildNodeTree } from "./build"
import { Markdown } from "../markdown"
import { stubMarkdown } from "../markdown/test/stub"

test("tree built from modules", () => {
	const modules: Record<string, Markdown> = {
		"index.md": stubMarkdown(),
		"fruit/index.md": stubMarkdown({ title: "Fruit" }),
		"fruit/apple.md": stubMarkdown({ title: "Apple" }),
		"fruit/orange.md": stubMarkdown({ title: "Orange" }),
		"veggie/index.md": stubMarkdown({ title: "Veggies" }),
		"veggie/tomato.md": stubMarkdown({ title: "Tomato" }),
		"veggie/carrot.md": stubMarkdown({ title: "Carrot" }),
	}

	const tree = buildNodeTree(modules)

	expect(tree).toEqual({
		id: "_root",
		content: modules["index.md"],
		children: {
			fruit: {
				id: "fruit",
				content: modules["fruit/index.md"],
				children: {
					apple: {
						id: "apple",
						content: modules["fruit/apple.md"],
						children: {},
					},
					orange: {
						id: "orange",
						content: modules["fruit/orange.md"],
						children: {},
					}
				}
			},
			veggie: {
				id: "veggie",
				content: modules["veggie/index.md"],
				children: {
					tomato: {
						id: "tomato",
						content: modules["veggie/tomato.md"],
						children: {},
					},
					carrot: {
						id: "carrot",
						content: modules["veggie/carrot.md"],
						children: {},
					}
				}
			},
		},
	})
})

test("deep hierarchy", () => {
	const modules: Record<string, Markdown> = {
		"index.md": stubMarkdown(),
		"fruit/index.md": stubMarkdown({ title: "Fruit" }),
		"fruit/apple/index.md": stubMarkdown({ title: "Apple" }),
		"fruit/apple/crispy/index.md": stubMarkdown({ title: "Crispy" }),
		"fruit/apple/crispy/honeycrisp.md": stubMarkdown({ title: "Honeycrisp" }),
	}

	const tree = buildNodeTree(modules)

	expect(tree).toEqual({
		id: "_root",
		content: modules["index.md"],
		children: {
			fruit: {
				id: "fruit",
				content: modules["fruit/index.md"],
				children: {
					apple: {
						id: "apple",
						content: modules["fruit/apple/index.md"],
						children: {
							crispy: {
								id: "crispy",
								content: modules["fruit/apple/crispy/index.md"],
								children: {
									honeycrisp: {
										id: "honeycrisp",
										content: modules["fruit/apple/crispy/honeycrisp.md"],
										children: {},
									},
								},
							},
						},
					},
				},
			},
		},
	})
})

test("shorter title than index", () => {
	const modules: Record<string, Markdown> = {
		"index.md": stubMarkdown(),
		"fruit/index.md": stubMarkdown({ title: "Fruit" }),
		"fruit/kiwi.md": stubMarkdown({ title: "Kiwi" }),
	}

	const tree = buildNodeTree(modules)

	expect(tree).toEqual({
		id: "_root",
		content: modules["index.md"],
		children: {
			fruit: {
				id: "fruit",
				content: modules["fruit/index.md"],
				children: {
					kiwi: {
						id: "kiwi",
						content: modules["fruit/kiwi.md"],
						children: {},
					},
				},
			},
		},
	})
})
