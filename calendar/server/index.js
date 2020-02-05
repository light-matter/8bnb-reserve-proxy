const express = require('express');
const db = require('../database-mysql/index.js');

const app = express();
const port = 3004;

app.use(express.static('client/dist'));
app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  db.getLocationInfo((err, results) => {
    if (err) {
      console.log(err);
    } else {
      const randomInd = Math.floor(Math.random() * 100);
      res.send(results[randomInd]);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
