import { Router } from "express";
import { check } from 'express-validator'

//Controllers section
import { createUser, 
         deleteUser, 
         getAllUsers, 
         getUser, 
         updateUser} from "../../controllers/DBcontrollers/user";

//Helpers section
import { existUserById, mailExist } from "../../helpers/db-validator";

// Middlewares section
import { validationAreas } from "../../middlewares/validations";
// import { validateJWT } from "../../middlewares/validation_jwt";
import { validateJWT } from '../../middlewares/validation_jwt'

const router = Router()

router.get('/', getAllUsers)

router.get('/:id', [
    validateJWT,
    check('id').custom(existUserById),
    validationAreas
], getUser)

router.post('/', [
    check('name','Name is a must').not().isEmpty(),
    check('mail','Mail not valid').isEmail(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail').custom(mailExist),
], createUser)

router.put('/:id',[
    validateJWT,
    check('id').custom(existUserById),
    validationAreas
], updateUser)

router.delete('/:id', [
    validateJWT,
    check('id').custom(existUserById),
    validationAreas
], deleteUser)

export default router;