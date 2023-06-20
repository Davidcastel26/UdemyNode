const {request, response} = require('express')
const jwt = require('jsonwebtoken')
import { PrismaClient } from "@prisma/client"

const { user } = new PrismaClient()

export const validateJWT =async (req:typeof request, res: typeof response, next: Function) => {
    
    const token = req.header('x-token');

    if( !token ){
        return res.status(400).json({msg:'Missing token'})
    }

    try{
        // uid comes from helpers generateJWT.ts file
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const userJWT = await user.findFirst({ where:{id: uid} })

        if( !userJWT ){
            return res.status(401).json({
                msg:'token no valid - user not in DB'
            })
        }

        req.user = userJWT

        next()

    }catch(err){
        console.log(err);
        
        res.status(401).json({msg:'No valid token'})
    }
}