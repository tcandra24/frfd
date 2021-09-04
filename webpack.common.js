const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
 
module.exports = {
   entry: "./src/main.js",
   output: {
       path: path.resolve(__dirname, "docs"),
       filename: "[name].js",
       chunkFilename: '[id].[chunkhash].js'
   },
   module: {
       rules: [
           {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html",
           favicon: "./src/favicon.ico"
       }),
       new MiniCssExtractPlugin(),
       new CleanWebpackPlugin(),
   ]
}