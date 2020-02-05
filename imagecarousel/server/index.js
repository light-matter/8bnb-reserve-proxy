const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {getHomes} = require('../database/db.js');
const regeneratorRuntime = require('regenerator-runtime');
const app = express()
const port = 3003

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//serves up files in the public folder
app.use(express.static('public'));

// app.get('/homes', async(req, res) => {
//   try{
//       const homes = await getHomes()
//       console.log('response sent!')
//       res.status(200).send(homes);
//     }
//   catch(err) {
//       console.log(err);
//       res.status(500).send();
//     }
// })
app.get('/homes', (req,res) => {
  getHomes((err, homes) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      console.log('get homes response sent');
      res.status(200).send(homes);
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;