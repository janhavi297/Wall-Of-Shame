const express = require('express')
const controller = require("../controller/snippet.controller")
const router = express.Router()

router.get('/', controller.getSnippet)
router.post('/', controller.addSnippet)
router.delete("/:id", controller.deleteSnippet)

module.exports = router