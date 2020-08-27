const { Router } = require('express')

const router = require('express').Router()
const burger = require('../models/burger.js')

// render index.hbs, using burgers array as the template data
router.get('/', (req, res) => {
  burger.read(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router