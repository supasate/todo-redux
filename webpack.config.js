module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      }
    ]
  }
}
