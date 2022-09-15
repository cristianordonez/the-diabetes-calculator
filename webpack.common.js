require('dotenv').config();
const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let apiHost;

let setupAPI = function () {
   console.log('process.env:', process.env);
   if (process.env.NODE_ENV === 'production') {
      apiHost = JSON.stringify('https://thediabetescalculator.com');
   } else if (process.env.NODE_ENV === 'development') {
      apiHost = JSON.stringify('http://localhost:8080');
   }
};

setupAPI();

module.exports = {
   resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
   },
   entry: `${path.join(__dirname, '/client/src')}/index.tsx`,
   output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new webpack.DefinePlugin({
         __API__: apiHost,
      }),
      new HtmlWebpackPlugin({
         title: 'The Diabetes Calculator',
         template: 'template.html',
         favicon: './favicon_io/favicon.ico',
      }),
      new MiniCssExtractPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      //! uncomment this line to visualize webpack bundles in browser
      // new BundleAnalyzerPlugin(),
   ],
};
