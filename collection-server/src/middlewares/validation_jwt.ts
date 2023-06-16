import { Request, Response } from 'express';
const jwt = require('jsonwebtoken')

export const validateJWT = (req:Request, res:Response, next: Function) => {
    
    const token = req.header('x-token');

    // console.log(token);

    if(!token){
        return res.status(400).json({msg:'Missing token'})
    }
    

    try{

        //const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        // req.uid = uid 
        jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        next()

    }catch(err){
        console.log(err);

        res.status(401).json({msg:'No valid token'})
    }

}