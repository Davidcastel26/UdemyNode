import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { category } = new PrismaClient();

export const getCategories = async(req:Request, res:Response) => {

    const categoryAll = await category.findMany({
        include:{
            products: true
        }
    })

    // res.send('category')
    res.json({
        mgs: 'Get all Category',
        categoryAll
    })
}

export const getCategory = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const categoryId = await category.findFirst({
        where:{
            id: parseInt(id)
        },
        include:{
            products:true
        }
    })
    
    res.json({
        msg:'get Categoery id',
        categoryId
    })

}

export const postCategory = async (req: Request, res: Response) => {
    
    const createCategory = await category.create({
        data: req.body
    })

    res.status(201).json({
        msg:'post category',
        createCategory
    })

}