const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const config = {
    plugins: [new MiniCssExtractPlugin()],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build') ,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                test: /\.css$/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 50000,
                    },
                  },
                  "image-webpack-loader"
                ],
            }
        ]
    }
};

module.exports = config;