const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/index.html', (req, res) => {
  res.send(`<!DOCTYPE HTML>
  <title>Hello Twitcdfsdfh!</title>
  <p>Hello, Twitfsdfdch!</p>
  <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
  
  <!-- index.html -->`);
})
