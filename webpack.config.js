const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './app.js',
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/",
    // contentBase: "./public",
    // hot: true,
    historyApiFallback: {
      // disableDotRule: true,
      rewrites: [
        { from: /^\/$/, to: '/public/index.html' },
        { from: /^\/foo/, to: '/public/foo.html' },
        { from: /(.*)/, to: '/test.html' },
      ],
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Html Webpack html",
      hash: true,
      filename: 'test.html',
      template: 'public/plugin.html',
    }),
  ],
};
