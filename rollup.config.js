import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const EXTERNALS = {
   'react': 'React',
   'react-dom': 'ReactDOM',
}

const sharedConfig = {
   plugins: [
      nodeResolve({
         extensions: [".js"],
         skip: Object.keys(EXTERNALS)
      }),
      babel({
         presets: ["@babel/preset-react"],
      }),
      commonjs(),
      replace({
         'process.env.NODE_ENV': JSON.stringify('development')
      }),
   ],
   external: Object.keys(EXTERNALS),
   globals: EXTERNALS,
}

export default [
   {
      ...sharedConfig,
      input: "src/componentA/index.js",
      output: {
         name: "componentA",
         file: "dist/bundleA.js",
         format: "iife",
         sourcemap: true,
      }
   },
   {
      ...sharedConfig,
      input: "src/componentB/index.js",
      output: {
         name: "componentB",
         file: "dist/bundleB.js",
         format: "iife",
         sourcemap: true,
      }
   },
   {
      ...sharedConfig,
      input: "src/componentC/index.js",
      output: {
         name: "componentC",
         file: "dist/bundleC.js",
         format: "iife",
         sourcemap: true,
      }
   },
   {
      ...sharedConfig,
      input: "src/composable/index.js",
      output: {
         file: "dist/composable.js",
         format: "iife",
         sourcemap: true,
      }
   }
];