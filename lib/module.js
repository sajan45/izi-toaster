const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['izi-toaster'],
    ...moduleOptions,
    css: []
  }

  options.css.push('izitoast/dist/css/iziToast.min.css')

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'izi-toaster.js',
    options
  })
}

module.exports.meta = require('../package.json')
