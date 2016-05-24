import webpack from 'webpack';
import path from 'path';

const BUILD_DIR = path.resolve(__dirname, 'src/client/public'),
      APP_DIR = path.resolve(__dirname, 'src/client/app');

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;
