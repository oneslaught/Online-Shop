import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";

const webpackConfig: Configuration = {
  devServer: {
    compress: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  entry: "./src/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  performance: {
    maxAssetSize: 512 * 1024 * 2,
    maxEntrypointSize: 512 * 1024 * 2,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: {
    children: true,
  },
};

export default webpackConfig;
