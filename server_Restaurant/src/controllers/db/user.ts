import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { user } = new PrismaClient()

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