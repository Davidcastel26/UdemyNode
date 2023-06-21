import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';

const { artists } = new PrismaClient()

export const getAllArtists = async (req: Request, res: Response, next: NextFunction) =>{

    try {

        const allArtist = await artists.findMany({
            where:{
                isActive: true
            }
        })

        res.status(200).json({
            msg:'all artists',
            allArtist
        })
        
    } catch (error) {
        next(error)
        console.log(res.status(401).json({msg:'no able to get data'}));
        
    }    

}

export const getArtist = async (req: Request, res: Response, next: NextFunction) =>{

}

export const createArtist = async (req: Request, res: Response, next: NextFunction) =>{

    const {artistUser, name, password, roleId } = req.body

    try {

        const id:string = uuidv4()

        const createArtists = {
            id,
            artistUser,
            name,
            password,
            roleId
        }

        //HASING PASS
        const salt = bcryptjs.genSaltSync();
        createArtists.password = bcryptjs.hashSync( password, salt)

        await artists.create({ data: createArtists})

        res.status(201).json({
            msg:'User created',
            createArtists
        })
        
    } catch (error) {
        next(error)
        console.log(res.status(401).json({msg: error}));
        
    }
}