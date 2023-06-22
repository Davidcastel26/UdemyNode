import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'
import bcryptjs from 'bcryptjs'

const { user } = new PrismaClient()

interface UserData  {
    id: string,
    name: string,
    password: string,
    menuId: string
}

export const getAllUsers = async (req:Request, res: Response, next: NextFunction) => {

    try {
        
        const allUser = await user.findMany({include:{menu:true}})

        return res.status(200).json({
            msg:'runing',
            allUser
        })

    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const createUser = async (req:Request, res:Response, next:NextFunction)=>{

    const { name, password, menuId } = req.body

    try {

        const id = uuidv4()
        
        const postUser: UserData = {
            id,
            name,
            password,
            menuId
        }

        const salt = bcryptjs.genSaltSync()
        postUser.password = bcryptjs.hashSync(password, salt)

        await user.create({data: postUser})

        return res.status(201).json({
            msg:'created',
            postUser
        })
        
    } catch (error) {
        next(error)
        console.log(res.status(401).json({msg:'not able to create user'}));
        
    }


}

// id String @unique
// name String
// password String 
// isActive Boolean @default(true)
// creatAt DateTime @default(now())
// menu Menu @relation(fields: [menuId], references: [id] )
// menuId String