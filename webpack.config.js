const path = require('path');
module.exports = {
  entry: './source/app/index.jsx',
  resolve: {
    modules: [path.resolve('source'),'node_modules'],
    alias: {
      assets: path.resolve(__dirname, 'source/app/assets/'),
      shared: path.resolve(__dirname, 'source/app/views/App/shared/'),
      screens: path.resolve(__dirname, 'source/app/views/App/screens/Frontend/screens'),
      views: path.resolve(__dirname, 'source/app/views/'),
      routes: path.resolve(__dirname, 'source/app/config/routes.jsx'),
      links: path.resolve(__dirname, 'source/app/config/links.jsx'),
      appHistory: path.resolve(__dirname, 'source/app/config/history.js') 
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {	
    path: path.resolve('dist'),
    filename: './js/app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}