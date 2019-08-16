const axios = require('axios')

const { renderApp, renderError } = require('../services/template')

const renderIndex = (_, res) => {
  const getVesselsApp = axios.get(process.env.VESSELS_APP_URL)
  const getDashboardApp = axios.get(process.env.DASHBOARD_APP_URL)
  Promise.all([getVesselsApp, getDashboardApp])
    .then(responses => {
      const applications = responses.map(response => response.data)
      res.send(renderApp(applications))
    })
    .catch(() => {
      res.send(renderError())
    })
}

module.exports = { renderIndex }
