const path = require('path');
module.exports = {
    entry:  './bundle.js',
    mode:   'production',
    output: {
        path:          path.resolve(__dirname, 'build'),
        filename:      'geodesy.js',
        library:       'geodesy',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test:    /\.js?$/,
                use:     [ 'babel-loader' ],
                exclude: /node_modules/,
            },
        ],
    },
};
