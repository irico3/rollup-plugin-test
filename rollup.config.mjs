import myExample from "./src/rollup-plugin-my-example.js";

export default {
  input: "virtual-module",
  output: {
    file: "bundle.js",
    format: "es",
  },
  plugins: [myExample()],
};
