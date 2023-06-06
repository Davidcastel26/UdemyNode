import { Request, Response } from "express"

const getUsers = (req: Request, res: Response) => {

    res.json({
        msg: 'GetUusuarios'
    })

}

const getUser = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg:'getUser',
        id
    })
}

const postUser = (req: Request, res: Response) => {
    
    const {body} = req;

    res.json({
        msg:'Post User',
        body
    })
}

const updateUser = (req: Request, res: Response) => {
    
    const { id } = req.params
    const { body } = req;

    res.json({
        msg:'putUser',
        body
    })

}

const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg:'deleteUser',
        id
    })

}


module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
}