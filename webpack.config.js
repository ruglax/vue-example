const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: __dirname + '/dist/bundle/',
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".vue", ".js", '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    externals: {
        vue: "Vue"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: "url-loader?name=[name].[ext]"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};