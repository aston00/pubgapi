// webpack.config.js
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.css$/, 
                use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]},
            {test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        }
        ]   
    }
};
