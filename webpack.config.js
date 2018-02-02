
var paths = require('path');
module.exports = {

    entry: './src/index.js',
    output: {
        path: paths.resolve(__dirname, ''),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: paths.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.sass$/,
                include: paths.resolve(__dirname, 'src'),
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
      }
};
