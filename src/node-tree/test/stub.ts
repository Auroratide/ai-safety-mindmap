import { stubMarkdown } from "../../markdown/test/stub"
import { NodeTree } from "../NodeTree"

export const stubFoodyNodeTree = (): NodeTree => ({
	id: "_root",
	content: stubMarkdown({ title: "Food" }),
	children: {
		fruit: {
			id: "fruit",
			content: stubMarkdown({ title: "Fruit" }),
			children: {
				apple: {
					id: "apple",
					content: stubMarkdown({ title: "Apple" }),
					children: {},
				},
				orange: {
					id: "orange",
					content: stubMarkdown({ title: "Orange" }),
					children: {},
				},
			},
		},
		veggie: {
			id: "veggie",
			content: stubMarkdown({ title: "Veggie" }),
			children: {
				tomato: {
					id: "tomato",
					content: stubMarkdown({ title: "Tomato" }),
					children: {},
				},
				carrot: {
					id: "carrot",
					content: stubMarkdown({ title: "Carrot" }),
					children: {},
				},
			},
		},
	},
})