import { defineConfig as e } from "oxlint";
//#region src/index.ts
var t = e({
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
//#endregion
export { t as default };
