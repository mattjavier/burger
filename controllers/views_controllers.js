const { Router } = require('express')

const router = require('express').Router()
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.read(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = Router