const router = require('express').Router()

router.get('/api', require('./burgers_controllers.js'))
router.get('/', require('./views_controllers.js'))

module.exports = router