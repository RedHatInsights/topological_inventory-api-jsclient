const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    library: '[name]',
    libraryTarget: 'umd',
  },
}