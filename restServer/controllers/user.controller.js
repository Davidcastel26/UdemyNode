const { response } = require('express')


const userGet = (req, res) => {

    res.status(200).json({
        "msg":"get API - controller"
    })
}

const userPut = (req, res) => {
    res.status(202).json({
        "msg":"Update API - controller"
    })
}

const userPost = (req, res) => {
    res.status(201).json({
        "msg":"Create API - controller"
    })
}

const userDelete = (req, res) => {
    res.status(200).json({
        "msg":"Delete API"
    })
}

module.exports = {
    userGet,
    userPut,
    userDelete,
    userPost,
}