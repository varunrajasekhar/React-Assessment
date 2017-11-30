var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var react = require("react");

if (typeof window !== 'undefined') {
    window.React = React;
}

var config = {



   devtool: 'eval-source-map',
   entry: [
       'webpack-dev-server/client?http://localhost:8081',
       'webpack/hot/only-dev-server',
       'react-hot-loader/patch',
       path.join(__dirname, './main.js')
   ],
   devServer: {
          inline: true,
          port: 8081,
          historyApiFallback:true
    },
   output: {
       path: path.join(__dirname, '/dist/'),
       filename: 'bundle.js',
       publicPath: '/'
   },
    plugins: [
       new HtmlWebpackPlugin({
         template: './index.html',
         inject: 'body',
         filename: 'index.html'
       }),
       new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin(),
       new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('development')
       })
        //"transform-object-rest-spread"
    ],



   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            //loader:'babel-loader'
            loaders:["expose-loader?bundle", "babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-es2015-function-name,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties,plugins[]=transform-object-rest-spread"]
         },
         {
            test: /\.css$/,
            use: [ 
                {
                    loader:'style-loader',
                    options: { url: false }
                }, 
                {
                    loader:'css-loader',
                    options:
                    {
                        url: false
                    }
                } 
            ],            
         },
         {
             test: require.resolve("react"),
             loader: "expose-loader?react"
         }         
      ]
   }
}

module.exports = config;