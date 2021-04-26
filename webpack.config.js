module.exports = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },  
  entry: {
    main:'./app.js', 
  },
  devtool:'source-map',
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }  
    ]
  }
};