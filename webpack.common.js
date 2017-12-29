const webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./src/App.jsx"],
    vendor: ['xlsx']
  },
  output: {
      path: __dirname + "/static",
      filename: "app.bundle.js"
  },
  resolve: {
		alias: { "./dist/cpexcel.js": "" }
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
  ],
  module: {
      loaders: [
          {
            test: /\.jsx$/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015',]
            }
          },
      ]
  }
}