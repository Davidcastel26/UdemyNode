import { Request, Response, json } from 'express';
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

// helpers
import { generateJWT } from '../helpers/generateJWT';

const { user } = new PrismaClient()

export const login = async (req:Request, res: Response) => {
    
    const {mail, password} = req.body;
    
    try {

        // verigy if mail exist 
        const userdb = await user.findUnique({
            where:{
                mail: mail
            }
        })

        if(!userdb){
            return res.status(400).json({
                msg:'user/ pass are not correct'
            })
        }

        //verify password
        
        const validPass = bcryptjs.compareSync( password, userdb.password)

        if( !validPass ){
            return res.status(400).json({
                msg:'user/ pass are not correct'
            })
        }

        // using the helpers 
        const token = await generateJWT( userdb.id )

        res.status(201).json({
            userdb,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Go with admin'
        })
        
    }

}