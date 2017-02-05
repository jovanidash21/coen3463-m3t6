var path = require('path');

module.exports = {
    entry: {
        movies_data: './src/movies_data.jsx'
    },
    output: {
        path: path.join(__dirname, '/public/build'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['latest', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};