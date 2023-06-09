import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { category } = new PrismaClient();

export const getCategory = (req:Request, res:Response) => {
    res.send('category')
}