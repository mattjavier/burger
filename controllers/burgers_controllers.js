const router = require('express').Router()
const burger = require('../models/burger.js')

// GET all burgers
router.get('/burgers', (req, res) => {

  // use burger model.read(), res.json() array of burgers returned
  burger.read(burgers => {
    res.json(burgers)
  })
})

// POST one burger
router.post('/burgers', (req, res) => {

  // use burger model.create() to post new burger, res.json the id
  burger.create(req.body, id => {
    res.json({ id })
  })
})

// PUT update to burger
router.put('/burgers/:id', (req, res) => {

  // use burger model.update() to update a burger's devour property, where id matches
  burger.update(req.body, { id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

module.exports = router