import { Request, Response, request} from "express";
import { PrismaClient } from "@prisma/client";

// const {request} = require('express')

const { songs } = new PrismaClient()

export const getAllSongs = async(req:Request, res:Response) =>{

    const allSongs = await songs.findMany({
        include:{
            artist:true
        }
    })

    res.status(200).json({
        msg:'all songs',
        allSongs
    })
}

export const getSong = async(req: typeof request , res: Response )=>{
    
    const { id } = req.params

    const songId = await songs.findFirst({
        where:{
            id: id
        },
        include:{
            artist:true,
            user:true
        }
    })

    res.status(200).json({
        msg:'get one song',
        songId
    })
}