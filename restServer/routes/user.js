
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({
        "msg":"get API"
    })
})
router.put('/', (req, res) => {
    res.status(202).json({
        "msg":"Update API"
    })
})
router.post('/', (req, res) => {
    res.status(201).json({
        "msg":"Create API"
    })
})
router.delete('/', (req, res) => {
    res.status(200).json({
        "msg":"Delete API"
    })
})

module.exports = router;