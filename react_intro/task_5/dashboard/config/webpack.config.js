const path = require('path');

module.exports = {
    entry: './task_5/dashboard/src/index.js',
    output: {
        path: path.resolve(__dirname, 'task_5/dashboard/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'task_5/dashboard/dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devtool: 'inline-source-map'
};
