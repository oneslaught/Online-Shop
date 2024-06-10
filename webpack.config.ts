import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
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
        test: /\.(ogg|mp3|wav)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(mp4|webm|ogg|avi)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: ["imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant"],
          },
        },
        generator: [
          {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            preset: "webp",
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
        // Disable `loader`
        loader: true,
      }),
    ],
    sideEffects: false,
    usedExports: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  performance: {
    maxAssetSize: 5 * 512 * 1024 * 2,
    maxEntrypointSize: 5 * 512 * 1024 * 2,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.ANALYZE === "true" ? [new BundleAnalyzerPlugin()] : []),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: {
    children: true,
  },
};

export default webpackConfig;
