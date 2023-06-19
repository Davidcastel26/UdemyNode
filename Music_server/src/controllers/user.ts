// dependencies modules 
import {Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client' 

const { user } = new PrismaClient()

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
    
    try{
        // const allUsers = await user.findMany()
        // console.log(allUsers);
        res.status(200).json({
            msg:'all users',
            // allUsers
        })

    }catch(err){
        next(err)
    }
}