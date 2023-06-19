import { Request, Response, NextFunction } from "express";

import { validationResult } from "express-validator";

export const validationAreas = (req: Request, res:Response, next: NextFunction) =>{

    const errors = validationResult(req)

    // if there is errors in the req we will return an error 
    if( !errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next()

}