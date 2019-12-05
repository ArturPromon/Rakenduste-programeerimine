const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: "public/index.html"
      }
    ]),
    new CopyPlugin([
      {
        from: "public/main.css"
      }
    ]),
    new CopyPlugin([
      {
        from: "public/images",
        to: "static/images"
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(js\jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
        failOnError: true
        },
      },
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader', 
      }
    ]
  },


  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist/static'),
    compress: true,
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
