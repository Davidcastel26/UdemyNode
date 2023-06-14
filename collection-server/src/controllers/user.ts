import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// to hash the password
import  bcryptjs  from "bcryptjs"


const { user } = new PrismaClient()


export const getUserAll = async (req:Request, res:Response) => {
    
    const allUsers = await user.findMany()

    res.json({
        msg:'Get all users',
        allUsers,
    })

}

export const postUser = async (req: Request, res:Response) => {

    const { name, img, Google, mail, password, rolesId} = req.body

    const createUser = {
            name,
            Google, 
            mail, 
            password,
            img, 
            rolesId
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
