import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from 'bcryptjs'
import { generateJWT } from "../../helpers/generateJWT";

const { user } = new PrismaClient()

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const {name, password} = req.body

    try {
        
        const userdb = await user.findFirst({
            where:{
                name: name
            }
        })

        if( !userdb ) return res.status(401).json({msg:'name / pass not correct'})

        const validPass = bcryptjs.compareSync(password, userdb.password)

        if(!validPass ) return res.status(401).json({msg:'name / pass not correct'})

        const token = generateJWT( userdb.id )

        res.status(201).json({
            msg:'login success',
            userdb,
            token
        })

    } catch (error) {
        next(error)
        console.log(res.status(401).json({msg:'unable to login'}));
        
    }    

}   