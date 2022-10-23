const HtmlWebpack = require("html-webpack-plugin");

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
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: "Mi webpack App",
      template: "./src/index.html",
      filename: "./index.html",
      // title: "Mi webpack App",
      // // filename: "holamundo.html",
      // template: "./src/index.html",
    }),
  ],
};
