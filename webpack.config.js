const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|otf)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                outputPath: 'path of output image directory'
            }
        }
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    fallback: {
        "fs": false
    },
  }
};