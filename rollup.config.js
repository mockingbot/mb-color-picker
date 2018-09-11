import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import calc from 'postcss-calc'
import cssvariables from 'postcss-css-variables'
import atImport from 'postcss-import'
import nested from 'postcss-nested'
import postcssurl from 'postcss-url'

import pkg from './package.json'

export default [{
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: false,
      plugins: [
        atImport(),
        nested(),
        cssvariables(),
        calc(),
        postcssurl()
      ]
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/lodash/lodash.js': [
          'isBoolean',
          'isEqual',
          'isArray',
          'isString'
        ]
      }
    })
  ]
}]
