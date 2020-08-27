const router = require('express').Router()
const burger = require('../models/burger.js')

// GET all burgers
router.get('/burgers', (req, res) => {
  burger.read(burgers => {
    res.json(burgers)
  })
})

// POST one burger
router.post('/burgers', (req, res) => {
  burger.create(req.body, id => {
    res.json({ id })
  })
})

// PUT update to burger
router.put('/burgers/:id', (req, res) => {
  burger.update(req.body, { id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

module.exports = router