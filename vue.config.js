module.exports = {
  chainWebpack: config => {
    config.optimization.minimizer(false)
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // '@': 'src'
  //     }
  //   }
  // },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*'}
  }
}
