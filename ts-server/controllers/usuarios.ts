import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {

    res.json({
        msg: 'GetUusuarios'
    })

}

export const getUser = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg:'getUser',
        id
    })
}

export const postUser = (req: Request, res: Response) => {
    
    const {body} = req;

    res.json({
        msg:'Post User',
        body
    })
}

export const updateUser = (req: Request, res: Response) => {
    
    const { id } = req.params
    const { body } = req;

    res.json({
        msg:'putUser',
        body
    })

}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg:'deleteUser',
        id
    })

}
// module.exports = {
//     getUsers,
//     getUser,
//     postUser,
//     updateUser,
//     deleteUser
// }