import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { product } = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
    
    const productsAll = await product.findMany()

    // res.send('product')
    res.json({
        msg:'GetProduct',
        productsAll
    })
}

export const getProduct = async (req: Request, res: Response) => {
    
}