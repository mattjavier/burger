const db = require('./connection.js')

// orm object
const orm = {}

// query db for SELECT all from table
orm.selectAll = (table, cb) => {
  db.query(`SELECT * FROM ${table}`, (err, data) => {
    if (err) { console.log(err) }
    cb(data)
  })
} 

// query db to INSERT new item into table
orm.insertOne = (table, data, cb) => {
  db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
    if (err) { console.log(err) }
    cb(data)
  })
}

// query db to UPDATE item where there is a matching id
orm.updateOne = (table, updates, where, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
    if (err) { console.log(err) }
    cb()
  })
}

module.exports = orm