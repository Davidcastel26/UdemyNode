import { Request, Response } from "express";
import  bcryptjs  from "bcryptjs"
import { PrismaClient } from "@prisma/client";

const { user } = new PrismaClient()


export const getUserAll = async (req:Request, res:Response) => {
    
    const allUsers = await user.findMany()

    res.json({
        msg:'Get all users',
        allUsers,
    })

}

export const postUser = async (req: Request, res:Response) => {

    const {name, img, google, mail, password, rol} = req.body

    const createUser = {
            name,
            Google: google, 
            mail, 
            password,
            img, 
            rol
    }

    //check if the mail exist
    const existMail = await user.findUnique({
        where: {
            mail: mail
        }
    })
    if( existMail ) return res.status(400).json({
        msg: 'Mail already exist'
    })

    // pass hash 
    const salt = bcryptjs.genSaltSync();
    createUser.password = bcryptjs.hashSync(password, salt)


    await user.create({
        data: createUser
    })

    res.status(201).json({
        msg:'User Created',
        createUser
    })

}
