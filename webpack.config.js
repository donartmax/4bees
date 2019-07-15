const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Path = require('path');

const dest = Path.join(__dirname, '../dist');

module.exports = {

    entry: {
        test: Path.resolve(__dirname, './src/script/test.js'),
        app: Path.resolve(__dirname, './src/script/index.js'),
        home: Path.resolve(__dirname, './src/script/home.js'),
        whatwedo: Path.resolve(__dirname, './src/script/whatwedo.js'),
        howwedoit: Path.resolve(__dirname, './src/script/howwedoit.js'),
        contact: Path.resolve(__dirname, './src/script/contact.js'),


        slider: Path.resolve(__dirname, './src/script/slider.js'),
        slider_solutions: Path.resolve(__dirname, './src/script/slider_solutions.js'),
        // maps: Path.resolve(__dirname, './src/script/maps.js'),
    },
    output: {
        path: Path.join(__dirname, './dist'),
        publicPath: '/',
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },

            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['app', 'test', 'home'],
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/what-we-do/index.html",
            filename: "./what-we-do/index.html",
            chunks: ['app', 'test', 'whatwedo'],
        }),
        // napraviti redirekciju od development ide ka our-products
        new HtmlWebPackPlugin({
            template: "./src/views/joinus/index.html",
            filename: "./joinus/index.html",
            chunks: ['app', 'test'],
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/applications/index.html",
            filename: "./development/our-solutions/applications/index.html",
            chunks: ['app', 'test', 'slider_solutions'],

        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/business/index.html",
            filename: "./development/our-solutions/business/index.html",
            chunks: ['app', 'test', 'slider_solutions'],
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/design/index.html",
            filename: "./development/our-solutions/design/index.html",
            chunks: ['app', 'test', 'slider_solutions']
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/outsourcing/index.html",
            filename: "./development/our-solutions/outsourcing/index.html",
            chunks: ['app', 'test', 'slider_solutions']
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/mobile/index.html",
            filename: "./development/our-solutions/mobile/index.html",
            chunks: ['app', 'test', 'slider_solutions']
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-solutions/digital-marketing/index.html",
            filename: "./development/our-solutions/digital-marketing/index.html",
            chunks: ['app', 'test', 'slider_solutions']
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-products/index.html",
            filename: "./development/our-products/index.html"
        }),


        new HtmlWebPackPlugin({
            template: "./src/views/development/our-products/kanpeki/index.html",
            filename: "./development/our-products/kanpeki/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-products/deducto-pharma/index.html",
            filename: "./development/our-products/deducto-pharma/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/views/development/our-products/project-manager/index.html",
            filename: "./development/our-products/project-manager/index.html"
        }),



        new HtmlWebPackPlugin({
            template: "./src/views/how-we-do-it/index.html",
            filename: "./how-we-do-it/index.html",
            chunks: ['app', 'test', 'howwedoit']

        }),
        new HtmlWebPackPlugin({
            template: "./src/views/contact/index.html",
            filename: "./contact/index.html",
            chunks: ['app', 'test', 'contact']

        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

}