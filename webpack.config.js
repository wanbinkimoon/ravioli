const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

module.exports = {
  context: paths.src,
  entry: ['./app.js'],
  output: {
    filename: 'app.bundle.js',
    path: paths.dist,
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0'] },
        }],
      }
    ],
  },
  devServer: {
    contentBase: paths.dist,
    compress: true,
    port: '4800',
    stats: 'errors-only',
  },

  plugins: [
    // new ExtractTextPlugin({
    //   filename: 'main.bundle.css',
    //   allChunks: true,
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: paths.data,
    //     to: paths.dist + '/data'
    //   }
    // ]), 
    // new DashboardPlugin(),  
  ],

}
