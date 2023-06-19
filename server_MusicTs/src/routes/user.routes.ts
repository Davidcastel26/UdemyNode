import { Router } from "express";
import { check } from 'express-validator'

//Controllers section
import { createUser, 
         getAllUsers, 
         getUser } from "../controllers/user";

//Helpers section
import { existUserById, mailExist } from "../helpers/db-validator";

// Middlewares section
import { validationAreas } from "../middlewares/validations";

const router = Router()

router.get('/', getAllUsers)

router.get('/:id', [
    check('id').custom(existUserById),
    validationAreas
], getUser)

router.post('/', [
    check('name','Name is a must').not().isEmpty(),
    check('mail','Mail not valid').isEmail(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail').custom(mailExist),
], createUser)

export default router;