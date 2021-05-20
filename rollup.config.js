import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const globals = {
  react: 'React',
};

const env = process.env.NODE_ENV;

const external = Object.keys(globals);

const output = {
  globals,
  name: 'ReactLiveMatches',
  format: 'umd',
};

const babelOptions = {
  exclude: ['node_modules/**'],
  babelrc: true,
  externalHelpers: false,
  sourceType: 'unambiguous',
};

export default [
  {
    input: 'src/index.jsx',
    external,
    output: {
      ...output,
      file: env === 'production' ? 'build/bundle.min.js' : 'build/bundle.js',
    },
    plugins: [
      resolve({
        extensions: ['.jsx', '.js', '.json'],
        browser: true,
      }),
      image(),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        ...babelOptions,
      }),
      replace({
        exclude: 'node_modules/**',
        'process.env.NODE_ENV': JSON.stringify(env),
      }),

      postcss({
        extract: 'style.min.css',
        minimize: env === 'production',
      }),
      env === 'production' && terser(),
    ],
  },
];
