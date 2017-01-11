const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '/client/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
  entry: PATHS.entry,

  output: {
    path: PATHS.output,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: PATHS.output,
    inline: true
  },

  plugins: [
  ],

  devtool: 'eval-source-map'
}
