module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'app.js',
    publicPath: 'dist',
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
      // eslint options (if necessary)
      },
    },
  ],
};
