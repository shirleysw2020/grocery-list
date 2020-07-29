const db = require('./index.js');

//  interact with database to get info or store info
module.exports = {

  getAllGroceries: (callback) => {
    // console.log(('getallgroceries working'));
    db.query('SELECT * FROM groceries', (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        // can see log in terminal server
        console.log('Results is: ', results, 'Fields is: ', fields);
        callback(null, results);
      }
    });
  },

  insertGrocery: (grocery, callback) => {
    // don't need ; at end of query
    db.query(`insert into groceries (name, quantity) values ("${grocery.name}", "${grocery.quantity}")`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    });
  }

}