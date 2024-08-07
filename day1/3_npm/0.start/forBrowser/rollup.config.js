import { nodeResolve } from "@rollup/plugin-node-resolve";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife",
    name: "bundle",
  },
  plugins: [nodeResolve()],
};
