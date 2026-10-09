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
		"import",
	],
	// Resolved from the consuming project, where this package is installed.
	jsPlugins: ["@dragunovartem99/oxlint-config/plugin"],
	rules: {
		"eslint/no-multi-assign": "error",

		"dragunovartem99/max-comment-lines": "warn",

		// Counts only real code, so a file's own doc comments don't eat into its budget.
		"eslint/max-lines": ["error", { max: 99, skipBlankLines: true, skipComments: true }],

		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/no-duplicates": "error",
		"import/no-mutable-exports": "error",

		// Side-effect imports (CSS, polyfills) can't be assigned to anything.
		"import/no-unassigned-import": "off",

		// Composition roots (configs, entry points) legitimately import a lot.
		"import/max-dependencies": "off",

		"typescript/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],

		// `interface X extends Y {}` is how declaration merging into a library's schema is written.
		"typescript/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends" }],

		"typescript/no-import-type-side-effects": "error",

		// Its autofix turns `return undefined` into a bare `return`, which `vue/return-in-computed-property` rejects.
		"unicorn/no-useless-undefined": "off",

		"vitest/no-identical-title": "error",
		"vue/define-props-destructuring": "warn",
		"vue/require-typed-ref": "error",
	},
});
