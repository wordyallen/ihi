const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


const options={
  contentBase: './web',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}

new WebpackDevServer(webpack(config), options).listen(3000, console.log(`http://0.0.0.0:3000`))
