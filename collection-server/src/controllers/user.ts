import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// to hash the password
import  bcryptjs  from "bcryptjs"


const { user } = new PrismaClient()


export const getUserAll = async (req:Request, res:Response) => {
    
    const { limit, since } = req.query;

    const allUsers = await user.findMany({
        take: limit ? Number(limit): undefined,
        skip: since ? Number(since): undefined
    })

    res.json({
        msg:'Get all users',
        query:req.query,
        allUsers,
    })

}

export const getUser = async ( req: Request, res:Response) => {

    const {id} = req.params;

    const getAuser = await user.findFirst({
        where:{
            id: parseInt(id)
        },
        include:{
            roles: true
        }
    })

    if( !getAuser ){
        return res.status(404).json({error:"User not found"})
    }

    return res.status(200).json({
        getAuser
    })

}

export const postUser = async (req: Request, res:Response) => {

    const { name, img, Google, mail, password, rolesId} = req.body

    const createUser = {
            name,
            Google, 
            mail, 
            password,
            img, 
            rolesId
    }

    // pass hash 
    const salt = bcryptjs.genSaltSync();
    createUser.password = bcryptjs.hashSync(password, salt)


    await user.create({
        data: createUser
    })

    res.status(201).json({
        msg:'User Created',
        createUser
    })

}

export const updateUser = async(req:Request, res:Response) => {

    const { id } = req.params;
    const { password, Google, ...resto} = req.body;

    const updateUsers ={
        password,
        Google
        // ...resto
    }

    //valid with db
    if( password ){
        const salt = bcryptjs.genSaltSync();
         updateUsers.password = bcryptjs.hashSync(password, salt)
    }

    const userUpdate = await user.update({
        where:{
            id: parseInt(id)
        },
        data: resto
    })

    res.status(200).json({
        msg:'PUT DONE user Updated',
        userUpdate
    })

}


export const deleteUser =async (req:Request, res:Response) => {
    
    const { id } = req.params;

    // const uid = req.uid 

    const userdelete = await user.delete({
        where:{
            id: Number(id)
        }
    })

    res.status(204).json(userdelete)

}