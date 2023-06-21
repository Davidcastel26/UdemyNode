import { NextFunction, Request, Response, request} from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

// const {request} = require('express')

const { songs } = new PrismaClient()

export const getAllSongs = async(req:Request, res:Response) =>{

    const allSongs = await songs.findMany({
        include:{
            songsMadeBy:true
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
            songsMadeBy:true,
            user:true,
            roles: true
        }
    })

    res.status(200).json({
        msg:'get one song',
        songId
    })
}

export const postSong = async(req: Request, res:Response, next: NextFunction)=>{

    const { song, realiceDate, artistId, roleId } = req.body

    try {

        const id:string = uuidv4()

        const createSong = await songs.create({
            data:{
                id,
                song,
                realiceDate,
                artistId,
                roleId
            }
        })

        res.status(201).json({
            msg:'Song created',
            createSong
        })

    }catch(err){
        next(err)
        console.log(res.status(401).json({msg:'couldnt create song'}))
    }

}