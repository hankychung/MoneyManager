const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/i,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  }
}