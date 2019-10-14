import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/main.js",
    output: {
      format: "esm",
      file: "dist/index.esm.js"
    },
    plugins: [vue(), commonjs()]
  },
  // SSR build.
  {
    input: "src/main.js",
    output: {
      format: "cjs",
      file: "dist/index.common.js"
    },
    plugins: [vue({ template: { optimizeSSR: true } }), commonjs()]
  }
];
