import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { category } = new PrismaClient();

export const getCategories = async(req:Request, res:Response) => {

    const categoryAll = await category.findMany()

    // res.send('category')
    res.json({
        mgs: 'Get all Category',
        categoryAll
    })
}

export const getCategory = async (req: Request, res: Response) => {
    
    
}

export const postCategory =async (req: Request, res: Response) => {
    
}