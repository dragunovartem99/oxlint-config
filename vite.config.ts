import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: { index: "src/index.ts", plugin: "src/plugin.ts" },
			formats: ["es"],
		},
		rollupOptions: {
			external: ["oxlint"],
		},
	},
});
