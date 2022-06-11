const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Frontend Capstone',
         template: 'template.html',
      }),
   ],
});
