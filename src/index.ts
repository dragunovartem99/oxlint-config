import { defineConfig } from "oxlint";

export default defineConfig({
	categories: {
		correctness: "error",
		suspicious: "error",
		pedantic: "warn",
		perf: "warn",
		style: "off",
		restriction: "off",
		nursery: "off",
	},
	plugins: [
		"eslint",
		"typescript",
		"unicorn",
		"oxc",
		"jsdoc",
		"node",
		"promise",
		"vitest",
		"vue",
	],
});
