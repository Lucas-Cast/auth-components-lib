/* eslint-disable no-undef */
import path from 'path';

import alias from '@rollup/plugin-alias';
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import * as pkg from "./package.json" with { type: "json" };

export default [
  
  {
    input: "src/index.ts",
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
    output: [
      {
        file: pkg.main,
        format: "cjs",
        inlineDynamicImports: true,
      },
      {
        file: pkg.module,
        format: "esm",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'build/types',
      }),
      alias({
        entries: [
          {
            find: "@components",
            replacement: path.resolve(__dirname, "./src/lib/components"),
          }
        ]
      }),
    ],
  },
  {
    input: "build/esm/types/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
