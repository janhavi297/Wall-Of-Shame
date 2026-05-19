const express = require('express')
const controller = require("../controller/comment.controller")
const router = express.Router()

router.get('/', controller.getComment)
router.post('/', controller.addComment)
router.delete("/:id", controller.deleteComment)

module.exports = router