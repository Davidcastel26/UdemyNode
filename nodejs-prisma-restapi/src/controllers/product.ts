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
        },
        include:{
            category: true
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

    res.status(201).json({
        msg:'post product',
        createProduct
    })

}

export const deleteProduct = async (req: Request, res: Response) => {

    const { id } = req.params;

    const productDelete = await product.delete({
        where:{
            id: parseInt(id)
        }
    })

    if(!productDelete)
        return res.status(404).json({error:"Product not found"})

    return res.status(200).json(productDelete)

}

export const updateProduct =async (req: Request, res: Response) => {

    const {id} = req.params;

    const putProduct = await product.update({
        where:{
            id: parseInt(id)
        },
        data: req.body
    })

    res.json(putProduct)

}