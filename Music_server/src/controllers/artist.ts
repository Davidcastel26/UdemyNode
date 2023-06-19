import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { artists } = new PrismaClient()
 
export const getAllArtist = async(req: Request, res: Response) =>{

    const allArtist = await artists.findMany()

    res.status(201).json({
        msg:'All artists',
        // allArtist
    })
}