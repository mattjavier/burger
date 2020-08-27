const router = require('express').Router()

// burger routes
router.use('/api', require('./burgers_controllers.js'))

// view routes
router.use('/', require('./views_controllers.js'))

module.exports = router