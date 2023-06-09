import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { product } = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
    
    const productsAll = await product.findMany()

    // res.send('product')
    res.json({
        msg:'GetProducts',
        productsAll
    })
}

export const getProduct = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const productId = await product.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!productId)
        return res.status(404).json({error:"Product not found"})

    return res.json({
        msg:'getProduct',
        productId
    })

}

export const postProduct = async (req: Request, res: Response) => {
    
    const createProduct = await product.create({
        data: req.body
    })

    res.json({
        msg:'post product',
        createProduct
    })

}
