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
const isProduction = env === 'production';

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
};

export default [
  {
    input: 'src/index.jsx',
    external,
    output: {
      ...output,
      file: isProduction ? 'build/bundle.min.js' : 'build/bundle.js',
    },
    plugins: [
      isProduction && replace({
        ENVIRONMENT: JSON.stringify('production'),
      }),
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
      postcss({
        extract: isProduction ? 'style.min.css' : 'style.css',
        minimize: isProduction,
      }),
      isProduction && terser(),
    ],
  },
];
