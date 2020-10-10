const express = require('express');
const app = express();
const router = require('./router.js')
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/groceries', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});