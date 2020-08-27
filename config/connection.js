const mysql = require('mysql2')

// make connection to local host or to Jaws DB
module.exports = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:JaJ012566m@localhost/burgers_db')