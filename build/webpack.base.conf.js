'use strict'
require('shelljs/global')
var webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var projectRoot = path.resolve(__dirname, '../')
var _ = require('lodash')
const fs = require('fs')
var glob=require('glob')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var entries=getEntry('./client/entries/*.js');
initDistFolder(entries);
module.exports = {
  entry:entries,
  // entry: {
  //   app: './src/main.js'
  // },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('client'),
      'jquery': 'jquery'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
 ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('client'), resolve('test'), resolve('server')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: projectRoot
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    //pathname = basename.split("_")[0];  //index_main.js得到index
    entries[basename] = entry;
  });
  return entries;
}

function initDistFolder(entries) {
  var assetsPath = path.join(path.resolve('dist'), 'static')
  var viewPath = path.join(path.resolve('dist'), 'views')
  //clear dist folder
  rm('-rf', path.resolve('dist'))

  //prepare view and static folder
  mkdir('-p', assetsPath)
  mkdir('-p', viewPath)

  // copy static content into dist
  cp('-R', 'static/*', assetsPath)

  //copy views from server folders
  var folders = ls('-d', 'server/*')
  folders.forEach(function (folder) {
    if (test('-d', folder + '/view/')) {
      // var dest = viewPath + '/' + folder + '/views';
      // mkdir('-p', dest);
      cp('-Rf', folder + '/view/*.html', viewPath)
    }
  });

  //inject js into view file for development mode, for production env, inject via webpack directly
  if (process.env.NODE_ENV === 'development') {
    var views = utils.getGlobbedPaths(viewPath + '/*.html');
    views.forEach(function (viewHtmlPath) {

      var viewName = viewHtmlPath.substring((viewHtmlPath.lastIndexOf("/") + 1), viewHtmlPath.lastIndexOf(".html"));
      if (entries[viewName]) {
        // inject the dependency js file into ejs file
        var scriptCode = '<script src="/dist/' + viewName + '.js"></script>';
        sed('-i',/<\/body>/, scriptCode+'<\/body>',viewHtmlPath);
        // sed('-i', /<injected-scripts\/>/, scriptCode + '\r\n', viewHtmlPath);
      }

    });
  }
}
