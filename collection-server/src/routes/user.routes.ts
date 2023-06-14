
import { Router } from "express";
// here we need to get our functions 
import { getUserAll, postUser } from "../controllers/user";
import { check } from "express-validator";


const router = Router()

router.get('/', getUserAll)
router.post('/', [
    check('mail','Mail not valid').isEmail()
], postUser)

export default router;