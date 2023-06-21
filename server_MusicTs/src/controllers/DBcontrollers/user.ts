import { Request, Response, NextFunction, json } from 'express';
const {request, response} = require('express')
import { PrismaClient } from "@prisma/client"
import bcryptjs from 'bcryptjs'
import {v4 as uuidv4} from 'uuid';

// console.log(uuidv4());

// getting the table's database for User
const { user } = new PrismaClient()

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try{

        const allUsers = await user.findMany({where:{
            isActive: true
        }})

        res.json({
            msg:'all users',
            allUsers
        })

    }catch(err){
        next(err)
    }

} 

export const getUser = async (req: typeof request, res: Response, next: NextFunction) => {
    
    const { id } = req.params
    // const uid = req.uid

    try {

        const userAuth = req.user

        const oneUser = await user.findUnique({
            where:{
                id: id
            },include:{
                listen: true
            }
        })

        if(userAuth.id !== oneUser.id){
            return res.status(401).json({
                msg:'token does not belong from same token id'
            })
        }else{
            if( oneUser.isActive === true ){
                return res.status(201).json({
                    msg:"one user",
                    userAuth,
                    oneUser
                })
            }else{
                res.status(400).json({
                    msg:'user not found in DB'
                })
            }
        }

    } catch (error) {
        next(error)
    }

}

export const createUser = async (req:Request, res: Response, next: NextFunction) => {
    
    try{

    const { name, mail, password, songId, roleId } = req.body

    const id:string = uuidv4()

    const createUser = {
        id,
        name,
        mail,
        password,
        songId,
        roleId
    }

    //pass hashing
    const salt = bcryptjs.genSaltSync();
    createUser.password = bcryptjs.hashSync(password, salt)

    

    await user.create({
        data: createUser
    })
    
    res.status(201).json({ 
        msg:'User created',
        createUser
    })

    }catch(err){
        next(err)
    }

}


export const updateUser = async (req: typeof request, res:Response) =>{

    const { id } = req.params
    const {password, name, ...userData } = req.body;
    const usertoken = req.user

    const updateData = {
        password,
        name,
        userData
    }

    const salt = bcryptjs.genSaltSync()
    updateData.password = bcryptjs.hashSync(password, salt)

    await user.update({
        where:{
            id:id
        },
        data:{
            password:password,
            name: name,
            ...userData
        }
    })

    if( usertoken.id !== id ){
        return res.status(401).json({msg:'incorrect token - login first to update user'})
    }

    return res.status(200).json({
        msg:'PUT done user updated',
        updateData
    })

}

export const deleteUser = async (req:typeof request, res:typeof response ) => {

    const { id } = req.params

    const userwithToken = req.user

    const userDelete = await user.update({
        where:{
            id: id
        },
        data:{
            isActive: false
        }
    })

    if( userwithToken.id !== userDelete.id)return res.status(401).json({
        msg:'token not valid - login first to delete a user'
    })

    return res.json(userDelete)
}