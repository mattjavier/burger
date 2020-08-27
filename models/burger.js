const orm = require('../config/orm.js')

const model = {}

model.read = cb => {
  orm.selectAll('burgers', burgers => cb(burgers))
}

model.create = (burger, cb) => {
  orm.insertOne('burgers', burger, id => cb(id))
}

model.update = (updates, where, cb) => {
  orm.updateOne('burgers', updates, where, () => cb())
}

module.exports = model