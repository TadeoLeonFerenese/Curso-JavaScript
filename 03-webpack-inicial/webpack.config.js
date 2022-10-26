const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  output: { clean: true },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false, //se deja en false por que mueve automaticamente archivos y por eso se deja en False
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/, //se aplica este exclude por que testea en cascada y si cumple una regla no cumple la otra
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: "Mi webpack App",
      template: "./src/index.html",
    }),

    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
    }),
  ],
};
