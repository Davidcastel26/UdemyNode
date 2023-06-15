import { Router } from "express";

// here we need to get our functions 
import { getUser, getUserAll, postUser } from "../controllers/user";
import { check } from "express-validator";
import { validationAreas } from "../middlewares/validations";
import { isValidRole, mailExits } from "../helpers/db-validator";




const router = Router()

router.get('/', getUserAll)

router.get('/:id', getUser)

router.post('/', [
    check('name', 'Name is a must').not().isEmpty(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail','Mail not valid').isEmail(),
    check('mail').custom( mailExits ),
    // check('rol','its not a valid rol').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rolesId').custom( isValidRole ),
    validationAreas 
], postUser)

export default router;