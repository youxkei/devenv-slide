const webpack = require('webpack');

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/index",
    ],
    output: {
        filename: "index.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "react-hot-loader/webpack" },
                    { loader: "awesome-typescript-loader" },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "raw-loader" }
                ],
            },
        ],
    },
    devServer: {
        hot: true,
        inline: true,
    },
    devtool: "eval",
};
