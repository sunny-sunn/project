const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test:/\.(css|less)$/i,
        use:['vue-style-loader','style-loader','css-loader','less-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  }
}
