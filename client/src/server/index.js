// import dependencies
const path = require('path');
const express = require('express');
const app = express('express');

var IntialGroceries = [
  {name: 'cold brew coffee', quantity: 5},
  {name: 'eggs', quantity: 12},
  {name: 'kale', quantity: 1},
  {name: 'garlic', quantity: 1},
  {name: 'peaches', quantity: 3},
  {name: 'steak', quantity: 2},
  {name: 'dark chocolate', quantity: 1},
];

// if you do this you only have object of app, not express!
// const app = require('express')();
// when you run epxress fn, you cna run with a object that you get
const PORT = 3000;

const testFunction = (req, res, next) => {
  console.log(`received request from ${req.method} to ${req.path}`);
  next();
}
// middleware
// app.use run everytime we get a request! processes ALL requests locally
app.use(testFunction);
// process *all* requests locally
// middleware allows us to insert a callback fn as param but we have to write that fn ourselves to get access to client of our files.
// express.static is fn ,we have to invike it and provide the folder name. here we told express that it's okay to share file from dist folder!
app.use(express.static(path.join(__dirname, '../client/dist')));
// line 21 actually returns a function.

// routes - what allows us to RESPOND to request!
//specific code for each type of request
app.get('./test', (req, res) => {
  // this function will run whever we get a get request from client to the provided endpoint
  res.status(200).send(groceries)
  // if for example our req is POST, we should send 201!~ bc something is created
  // if we dont do res.send, the request will time out!
  // this is our way of talking back to the client: res.send
  // show up in terminal wndow that's running node! our console logs
})

// start server
// listen on a port. any request heard will be andle by our app.
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    consoe.log('server is listening on port: ', PORT);
  }
})