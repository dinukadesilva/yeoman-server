// [name] under the output section denotes the entry prop names

module.exports = {
  entry: {
    dist: ['./client/src/yeoman-ui.js']
  },
  output: {
    path: './',
    filename: './client/dist/yeoman-ui.js'
  },
  contentBase: "./client", // for webpack dev server
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader'
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(css|scss)$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loaders: [
          'url-loader'
        ]
      },
    ]
  }
};
