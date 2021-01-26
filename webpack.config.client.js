// Webpack file for bundling the client code during development
const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/* 
    mode - sets process.env.NODE_ENV to given value
    devtool - specifies how source-maps are generated
    entry - specifies where the Webpack starts bundling
    output - specifies output path for bundled code
    publicPath  - allows specifying the base path for all assets in the application.
    module - sets the regex rule for the file extension to be used for transpilation, and the folders to be excluded.
    The transpilation tool to be used here is babel-loader
*/

const isDevelopment = process.env.NODE_ENV === 'development'

const config = {
    name: "browser",
    mode: "development",  // default is 'production'
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // allows skipping emitting when there are compile errors
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
}


module.exports = config