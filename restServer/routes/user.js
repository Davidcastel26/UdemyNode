
const { Router } = require('express')
const router = Router()

router.get('/api', (req, res) => {
    res.status(200).json({
        "msg":"get API"
    })
})
router.put('/api', (req, res) => {
    res.status(202).json({
        "msg":"Update API"
    })
})
router.post('/api', (req, res) => {
    res.status(201).json({
        "msg":"Create API"
    })
})
router.delete('/api', (req, res) => {
    res.status(200).json({
        "msg":"Delete API"
    })
})

module.exports = router;