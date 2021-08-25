const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["", "*", ".js", ".jsx", "ts", "tsx", "css"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jp?g|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
