const path = require('path');
const pathHack = (_path) => {
    return _path.charAt(0).toUpperCase() + _path.slice(1).toLowerCase()
};

module.exports = {
    entry: pathHack(path.join(__dirname, "../src/server/server")),
    output: {
        filename: 'server.js',
        path: pathHack(path.join(__dirname, "../public")),
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
            }
        ]
    },
    target: 'node',
}

