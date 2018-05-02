// webpack.config.js
var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: ['./src/js/ia.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ia.js'
  },
  module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    ['env', { module: false }]
                ]
            }
        }]
      }]
  }
}