import { Router } from "express";
import { check } from "express-validator";

// controllers
import { createUser, 
         getAllUsers } from "../../controllers/db_controllers/user";

//middleware
import { validationAreas } from "../../middleware/validation_areas";

const router = Router()

router.get('/', getAllUsers)

router.post('/', [
    check('name','Name is a must').not().isEmpty(),
    check('password','Password must be more than 6 characters').isLength({min:6}),
    validationAreas
], createUser)

export default router;