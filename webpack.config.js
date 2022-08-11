const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Prueba de webpack",
      //filename: cambiar el nombre del archivo,
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        ignoreOrder: false
    })
  ],
};
