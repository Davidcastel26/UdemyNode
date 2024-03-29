// import { Request, Response } from 'express';
const {response, request} = require('express')
const jwt = require('jsonwebtoken')
import { PrismaClient } from '@prisma/client';

const { user } = new PrismaClient()

export const validateJWT = async(req: typeof request, res: typeof response, next: Function) => {
    
    const token = req.header('x-token');

    // console.log(token);

    if(!token){
        return res.status(400).json({msg:'Missing token'})
    }
    

    try{

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        // req.id = uid  
        const users = await user.findFirst({ where: {id: parseInt( uid )}})

        if( !users ){ 
            return res.status(401).json({
                msg:'token no valid - user not in db'
            })
        }

        req.user = users

        // console.log( uid );
        
        next()

    }catch(err){
        console.log(err);

        res.status(401).json({msg:'No valid token'})
    }

}