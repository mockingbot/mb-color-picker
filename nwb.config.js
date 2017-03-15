module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MBColorPicker',
      externals: {
        react: 'React'
      }
    }
  }
}

