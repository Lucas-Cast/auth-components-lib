/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path'

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import alias from '@rollup/plugin-alias';
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import * as pkg from "./package.json" with { type: "json" };

export default {
   input: "src/index.ts",
   output: [
    {
      file: pkg.main,
      format: "cjs",
      sourceMap: true,
      inlineDynamicImports: true,
    },
   ],
   plugins: [
    resolve(),
    commonjs(),
    peerDepsExternal(),
    typescript({ 
      tsconfig: './tsconfig.app.json',
      declaration: true,
      declarationDir: 'build',
  }),
  alias({
    entries: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/lib/components"),
      },
    ]
  }),
  
  ]
};