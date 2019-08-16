const renderApp = apps => {
  return `
    <!doctype html>
      <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Seaspan App</title>
      </head>
      <body>
          ${apps.join('')}
      </body>
    </html>
  `
}

const renderError = () => {
  return `
    <!doctype html>
      <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Seaspan App</title>
      </head>
      <body>
          <style>
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
                'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #282c34;
              color: white;
              width: 100vw;
              min-width: 600px;
            }
            h3 {
              text-align: center;
              margin-top: 100px;
              width: 100%;
            }
          </style>
          <h3>It broke. Here is a bear 🐻</h3>
      </body>
    </html>
  `
}

module.exports = { renderApp, renderError }
