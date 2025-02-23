import { defineConfig } from "vite"
import { plugin as md, Mode } from "vite-plugin-markdown"

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [md({ mode: [Mode.HTML] })],
})
