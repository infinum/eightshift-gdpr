/* global process __dirname */

const DEV = process.env.NODE_ENV !== 'production';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const appPath = `${path.resolve(__dirname)}`;

// Plugin
const pluginPath = '/skin';
const pluginFullPath = `${appPath}${pluginPath}`;
const pluginPublicPath = `${pluginPath}/public/`;
const pluginFrontEntry = `${pluginFullPath}/assets/front/application.js`;
const pluginFrontOutput = `${pluginFullPath}/public/front`;


// Outputs
const outputJs = 'scripts/[name].js';
const outputCss = 'styles/[name].css';

const allModules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 'postcss-loader', 'sass-loader',
      ],
    },
  ],
};

const allPlugins = [
  new MiniCssExtractPlugin({
    filename: outputCss,
  }),

  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

const allOptimizations = {
  runtimeChunk: false,
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

// Use only for production build
if (!DEV) {
  allOptimizations.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true, // eslint-disable-line camelcase
        },
      },
    }),
  ];
  allPlugins.push(new CleanWebpackPlugin([pluginFrontOutput]));
}

module.exports = [

  // Front Part.
  {
    context: path.join(__dirname),
    entry: {
      esgdprApplication: [pluginFrontEntry],
    },
    output: {
      path: pluginFrontOutput,
      publicPath: pluginPublicPath,
      filename: outputJs,
    },

    externals: {
      jquery: 'jQuery',
    },

    optimization: allOptimizations,

    mode: 'development',

    module: allModules,

    plugins: allPlugins,

    devtool: DEV ? '#inline-source-map' : '',
  },
];
