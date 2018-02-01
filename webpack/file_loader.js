module.exports = function() {
    return {
        module: 
        {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
                {
                test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    exclude: [/images/],
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                },
                // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader", options: {name: 'fonts/[name].[ext]'}},
                // { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader", options: {name: 'fonts/[name].[ext]'}},
                
            ],
        },
    };
};