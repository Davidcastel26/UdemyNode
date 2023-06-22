import { NextFunction, Request, Response } from "express";
// import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from '@prisma/client'

const { chef } = new PrismaClient()


export const createChef =async (req:Request, res: Response, next: NextFunction) => {
    
    const { name } = req.body

    try {

        
        // const id = Math.random(Math.floor())

        // const postChef = {
        //     name,
        //     id
        // }
    
        // await chef.create({
        //     data: postChef
        // })

        const postChef = await chef.create({
            data:{
                name: name,
                // id: id
            }
        })

        res.status(200).json({
            msg:'chef created',
            postChef
        })


    } catch (error) {
        next(error)
        console.log(res.status(400).json({msg:'not able to create user'}));
        
    }

}

// id Int @unique @default(autoincrement())
//   name String
//   isActive Boolean @default(true)
//   creatAt DateTime @default(now())
//   menu Menu[] 