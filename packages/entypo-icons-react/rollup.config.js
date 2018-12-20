import minify from "rollup-plugin-babel-minify";
import typescript from "rollup-plugin-typescript2";

module.exports = {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "es"
    }
  ],
  plugins: [typescript({ clean: true }), minify({ comments: false })],
  external: ["react", "entypo-icons-utils", "entypo-icons-core"]
};
