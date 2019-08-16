const environmentUrl = {
  production: 'https://caring-control.surge.sh/',
  development: '/',
  test: 'http://localhost:4001'
}

module.exports = {
  publicPath: environmentUrl[process.env.NODE_ENV]
}
