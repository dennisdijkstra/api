const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/': 'http://localhost:5000/api',
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './client/src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
};
