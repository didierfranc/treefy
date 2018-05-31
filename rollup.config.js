import commonjs from "rollup-plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve';
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: {
    exports: "named",
    file: "dist/treefy.js",
    format: "cjs"
  },
  plugins: [
    uglify(),
    commonjs(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
