
import { Router } from "express";
// here we need to get our functions 
import { getUserAll, postUser } from "../controllers/user";
import { check } from "express-validator";
import { validationAreas } from "../middlewares/validations";


const router = Router()

router.get('/', getUserAll)

router.post('/', [
    check('name', 'Name is a must').not().isEmpty(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail','Mail not valid').isEmail(),
    check('rol','its not a valid rol').isIn(['ADMIN_ROLE','USER_ROLE']),
    validationAreas 
], postUser)

export default router;