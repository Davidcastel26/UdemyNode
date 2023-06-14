import { Response, Request } from "express";
// review if mail is correct
import { validationResult } from "express-validator";

export const validationAreas = (req:Request, res:Response, next:any) => {
    const errors = validationResult(req);
    if( !errors.isEmpty()) return res.status(400).json(errors)

    next()
}

