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
		nursery: "off"
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
		"import"
	],
	rules: {
		"eslint/no-multi-assign": "error",
		"eslint/max-lines": ["error", {
			max: 99,
			skipBlankLines: !0,
			skipComments: !0
		}],
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/no-duplicates": "error",
		"import/no-mutable-exports": "error",
		"import/no-unassigned-import": "off",
		"import/max-dependencies": "off",
		"typescript/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],
		"typescript/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends" }],
		"typescript/no-import-type-side-effects": "error",
		"vitest/no-identical-title": "error",
		"vue/define-props-destructuring": "warn",
		"vue/require-typed-ref": "error"
	}
});
//#endregion
export { t as default };
