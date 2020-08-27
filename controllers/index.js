const router = require('express').Router()

router.use('/api', require('./burgers_controllers.js'))
router.use('/', require('./views_controllers.js'))

module.exports = router