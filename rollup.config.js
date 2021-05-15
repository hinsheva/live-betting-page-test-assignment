import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const input = 'src/index.jsx'

const globals = {
  react: 'React'
}

const external = Object.keys(globals)

const extensions = ['.ts', '.tsx', '.jsx', '.js', '.json']

const output = {
  globals,
  name: 'ReactLiveMatches',
  format: 'umd',
}

const babelOptions = {
  exclude: ['node_modules/**'],
  babelrc: true,
  externalHelpers: false,
  sourceType: 'unambiguous',
}

export default [
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.js',
    },
    plugins: [
      resolve({
        extensions,
        browser: true,
      }),
      image(),
      commonjs({
        include: /node_modules/,
      }),
      babel(babelOptions),
      postcss({
        extract: 'style.css',
      }),
    ],
  },
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.min.js',
    },
    plugins: [
      resolve({
        extensions,
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
        extract: 'style.min.css',
        minimize: true,
      }),
      terser(),
    ],
  },
]