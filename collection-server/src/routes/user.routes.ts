
import { Router } from "express";
// here we need to get our functions 
import { getUserAll } from "../controllers/user";


const router = Router()

router.get('/', getUserAll)

export default router;