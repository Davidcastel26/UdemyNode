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

    const {name, ega} = req.body;

    res.status(201).json({
        name,
        ega
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