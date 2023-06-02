const { response, request } = require('express')


const userGet = (req = request, res) => {

    const {name, q, limit, page = 1} = req.query 

    res.status(200).json({
        "msg":"get API - controller",
        name,
        q,
        limit,
        page
    })
}

const userPut = (req, res) => {

    const { id } = req.params

    res.status(202).json({
        "msg":"Update API - controller",
        id
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