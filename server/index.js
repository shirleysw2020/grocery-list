const express = require('express');
const app = express();
const model = require('../db/model.js');
const path = require('path');
const PORT = 3000;

var groceries = [
  {name: 'Garlic', quantity: 3},
  {name: 'Parmesean Cheese', quantity: 1},
  {name: 'coffee', quantity: 1},
  {name: 'Peaches', quantity: 5},
  {name: 'Spinach', quantity: 3},
  {name: 'Onions', quantity: 5}
]
//req, res, next
const testFn = (req, res, next) => {
  console.log(`receiving ${req.method} from ${req.path}`);
  next();
}
// middleware
app.use(express.json());
app.use(testFn);
// give access to dir to client
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/groceries',(req, res) => {
  // try making get request in postman to groceries endpoint, u'll get database for groceries
  // talk to our database to get all groceries
  model.getAllGroceries((err,results) => {
    if (err) {
      console.log(err)
    } else {
      // data we grabbed from db
      res.status(200).send(results);
    }
  })
})

app.post('/groceries', (req, res) => {
  // console.log(res.body, 'what are they')
  model.insertGrocery(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(results);
      res.status(201).send();
    }
  })
})

// set PORT to listen
app.listen(PORT, (err) => {
  console.log("admin, your server listening on port", PORT);
})