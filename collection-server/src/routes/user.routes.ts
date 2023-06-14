import { Router } from "express";
import { PrismaClient } from "@prisma/client";
// here we need to get our functions 
import { getUser, getUserAll, postUser } from "../controllers/user";
import { check } from "express-validator";
import { validationAreas } from "../middlewares/validations";


const { roles } = new PrismaClient()

const router = Router()

router.get('/', getUserAll)

router.get('/:id', getUser)

router.post('/', [
    check('name', 'Name is a must').not().isEmpty(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail','Mail not valid').isEmail(),
    // check('rol','its not a valid rol').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rolesId').custom( async (role:string = '') => {
        const existRole = await roles.findUnique({
            where: {
                role : role
            }
        })

        if( !existRole ){
            throw new Error(`Role ${role} does not exist`)
        }

    }),
    validationAreas 
], postUser)

export default router;