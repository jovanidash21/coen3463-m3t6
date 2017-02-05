var path = require('path');

module.exports = {
    entry: {
        users_data: './src/usersData.jsx',
        movies_data: './src/moviesData.jsx'
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