const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    /* loaders */
    module: {
        rules: [
            {
                test: /\.css$/,
                /* Note: Order is from last to first */
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        open: true
    }
};