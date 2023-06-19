import { Router } from "express";
import { check } from "express-validator";

// controllers section 
import { login } from "../controllers/authjwt.user";

// middlewares section
import { validationAreas } from "../middlewares/validations";

const router = Router()

// create JSON WEB TOKEN for a especif user 
router.post('/login',[
    check('mail','Mail is a must').isEmail(),
    check('password','Password is a must').not().isEmpty(),
    validationAreas
], login)


export default router;
