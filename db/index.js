// how to connect server to mysql database using node
var sql = require('mysql');

var connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  databse: 'grocery_list'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});
// whatever you export is being returned by the require function insideindex.js on server side
module.exports = connection;