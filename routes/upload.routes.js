const router = require('express').Router()
const uploaderMiddleware = require('../middlewares/uploader.middlewares')

const { upload } = require('../controllers/upload.controller')

router.post('/image', uploaderMiddleware.single('imageData'), upload)

module.exports = router