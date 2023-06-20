import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { songs } = new PrismaClient()

export const getAllSongs = (req:Request, res:Response) =>{

    res.status(200).json({
        msg:'all songs'
    })
}