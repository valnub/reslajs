import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'reslajs',
      file: pkg.main,
      format: 'es',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      postcss({
        extensions: ['.css'],
      }),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      commonjs(),
    ],
    external: ['react', 'prop-types'],
  },
];
