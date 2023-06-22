import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from "@prisma/client";

const { menu } = new PrismaClient()

export const createMenu = async ( req: Request, res: Response, next: NextFunction) =>{
    
    const { name, chefId } = req.body

    const id = uuidv4()

    try {
        
        const postMenu = await menu.create({
            data:{
                id: id,
                name:name,
                chefId: chefId
            }
        })

        res.status(200).json({
            msg:'Menu created',
            postMenu
        })

    } catch (error) {
        next(error)
        console.log(res.status(400).json({msg:'not able to create menu'}));
    }
}

// id String @unique
// name String
// isActive Boolean @default(true)
// createAt DateTime @default(now())
// user User[]
// chef Chef @relation(fields: [chefId], references: [id])
// chefId Int