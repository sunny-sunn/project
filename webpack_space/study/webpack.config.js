const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require('webpack');

module.exports = {
  //源代码入口文件
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
    ]
  },
  devServer: {
    hot: true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  //输出配置
  output: {
    //输出文件名
    filename: '[name].bundle.js',
    //输出路径
    path: path.resolve(__dirname, 'dist')
  }
};