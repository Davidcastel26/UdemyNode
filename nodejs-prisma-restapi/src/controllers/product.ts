import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const { product } = new PrismaClient();

export const getProduct = async (req: Request, res: Response) => {


}

