const orm = require('../config/orm.js')

// model object
const model = {}

// use orm.selectAll to query db for all burgers, run cb() function on all burgers
model.read = cb => {
  orm.selectAll('burgers', burgers => cb(burgers))
}

// use orm.insertOne to query db to insert a burger. run cb() function on returned id
model.create = (burger, cb) => {
  orm.insertOne('burgers', burger, id => cb(id))
}

// use orm.updateOne to update an existing burger where id matches, run cb() function
model.update = (updates, where, cb) => {
  orm.updateOne('burgers', updates, where, () => cb())
}

module.exports = model