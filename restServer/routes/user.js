
const { Router } = require('express')
const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controller')
const router = Router()

router.get('/', userGet)

router.put('/', userPut)

router.post('/', userPost)

router.delete('/', userDelete)

module.exports = router;