import config from "./src/index.ts";

// The published specifier points at `dist/`, which doesn't exist before a build.
export default { ...config, jsPlugins: ["./src/plugin.ts"] };
