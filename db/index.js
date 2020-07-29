// how to connect server to mysql database using node
var sql = require('mysql');

var connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'grocery_list'
});

connection.connect((err) => {
  if (err) {
    console.log(err, 'admin, you\'re not connecting to database ');
  } else {
    console.log('admin, your server connected to DB');
  }
});
// whatever you export is being returned by the require function insideindex.js on server side
module.exports = connection;