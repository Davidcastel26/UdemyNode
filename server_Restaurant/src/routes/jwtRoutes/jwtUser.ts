import { Router } from "express";

import { loginUser } from "../../controllers/JWTcontrollers/JWTuser";

const router = Router()

router.post('/login', loginUser)

export default router;