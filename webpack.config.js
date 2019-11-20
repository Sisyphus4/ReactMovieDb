const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
       historyApiFallback: true,
     },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
           {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
              'file-loader',
                ],
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
         ],
       },
};