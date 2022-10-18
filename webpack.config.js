const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/hero.js',
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
        test: /\.jsx/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
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
        "fs": false,
        "url": require.resolve("url")
    },
  }
};