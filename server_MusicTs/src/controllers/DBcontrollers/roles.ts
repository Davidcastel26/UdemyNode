import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { roles } = new PrismaClient()

interface Data {
    id?:number,
    role:string
}

export const getAllRoles = async (req:Request, res: Response, next: NextFunction) => {

    try {

        res.status(200).json(await roles.findMany({
            include:{
                artist: true,
                songs: true,
                model: true
            }
        }))
        
    } catch (error) {
        next(error)
    }
}

export const craeteRole = async (req:Request, res: Response, next: NextFunction) => {

    const { role } = req.body

    try {

        const postRole:Data = {
            role
        }

        await roles.create({ data: postRole})

        res.status(201).json({
            msg:'role created',
            postRole
        })
        
    } catch (error) {
        next(error)
        console.log(res.status(401).json({msg:'cannot create role'}));
        
    }
}

export const removeRole = async (req:Request, res:Response, next: NextFunction)=>{

    const { id } = req.params

    try {

        
        const deleteRole = await roles.delete({ 
            where:{
                id: parseInt(id)
            }
        })

        res.json(deleteRole)

    } catch (error) {
        next(error)
        res.status(401).json({msg:error})
    }

}