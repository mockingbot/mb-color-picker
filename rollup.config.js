import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from '@plrthink/rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import sass from 'node-sass'

const preprocessor = (_, id) => new Promise((resolve, reject) => {
  const result = sass.renderSync({ file: id })
  resolve({ code: result.css.toString() })
})

const cssExportMap = {}

export default {
  entry: 'src/index.js',
  format: 'es',
  moduleName: 'ColorPicker',
  dest: 'dist/main.es.js',
  external: ['react'],
  globals: {
    react: 'React'
  },
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs({ sourceMap: false }),
    postcss({
      sourceMap: true,
      preprocessor,
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      getExport (id) {
        return cssExportMap[id]
      },
      extensions: ['.sass'],
      extract: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
  