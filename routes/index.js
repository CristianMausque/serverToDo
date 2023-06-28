const router = require("express").Router()

router.use('/todos', require('./todo.routes'))

router.use('/users', require('./user.routes'))

router.use('/auth', require('./auth.routes'))

router.use('/upload', require('./upload.routes'))

module.exports = router