const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = module.exports = {
  plugins: []
};

// Set context to root of project
config.context = path.resolve(__dirname);

// Client entry
config.entry = {
  "vue-floatThead": path.resolve(__dirname, 'src/main')
};

// Basic output config
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'vue-floatthead.js',
  library: ["vue-floatThead"],
  libraryTarget: "umd",
};

config.externals = [{
  'vue': {
    umd: 'Vue',
    global: 'Vue',
    root: 'Vue',
    commonjs2: 'vue',
    commonjs: 'vue',
    amd: 'vue'
  }
}];
// Resolver config
config.resolve = {
  extensions: ['.js', '.vue'],
  enforceExtension: false
};

config.resolveLoader = {
  modules: config.resolve.modules
};

config.module = {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      // important: exclude files in node_modules, otherwise it's going to be really slow!
      exclude: /node_modules|vendor/
    },
  ]
};
