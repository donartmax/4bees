const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Path = require("path");

const dest = Path.join(__dirname, "../dist");

const { pages } = require("./src/pages");

module.exports = {
  entry: {
    test: Path.resolve(__dirname, "./src/script/test.js"),
    app: Path.resolve(__dirname, "./src/script/index.js"),
    home: Path.resolve(__dirname, "./src/script/home.js"),
    whatwedo: Path.resolve(__dirname, "./src/script/whatwedo.js"),
    howwedoit: Path.resolve(__dirname, "./src/script/howwedoit.js"),
    contact: Path.resolve(__dirname, "./src/script/contact.js"),
    product: Path.resolve(__dirname, "./src/script/product.js"),

    slider: Path.resolve(__dirname, "./src/script/slider.js"),
    slider_solutions: Path.resolve(
      __dirname,
      "./src/script/slider_solutions.js"
    )
    // maps: Path.resolve(__dirname, './src/script/maps.js'),
  },
  output: {
    path: Path.join(__dirname, "./dist"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ].concat(pages)
};
