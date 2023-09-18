const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
    reservation: "./src/reservation.js",
    review: "./src/review.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Document",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
