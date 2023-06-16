import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from 'bcryptjs';

const { user } = new PrismaClient()

export const login = async( req:Request, res:Response ) => {

    const {mail, password} = req.body

    try{

        //verify if mail exist
        const userdb = await user.findUnique({
            where:{
                mail: mail
            }
        })

        if( !userdb ){
            return res.status(400).json({
                msg:'user / pass are not correct - MAIL'
            })
        }
        // verify password 

        // const userPassword = await user.findFirst({
        //     where:{
        //         password: password
        //     }
        // })

        const validPass = bcryptjs.compareSync( password , userdb.password )

        if( !validPass ){
            return res.status(400).json({
                msg:'user/ pass are not correct - Pass'
            })
        }

        // generate JWT 

        res.status(201).json({
            msg:'login'
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg:'Go with Administrator'
        })
    }

}