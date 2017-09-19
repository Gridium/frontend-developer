const path = require('path');
module.exports = {
  entry: './source/app/index.js',
  resolve: {
    modules: [path.resolve('source'),'node_modules'],
    alias: {
 		 assets: path.resolve(__dirname, 'source/app/assets/'),
 		 shared: path.resolve(__dirname, 'source/app/views/shared/'),
 		 config: path.resolve(__dirname, 'source/app/config/routes.js'),
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