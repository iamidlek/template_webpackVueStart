const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    host:'localhost',
    port: 8088,
    hot: true
  }
}
