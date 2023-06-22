import { Router } from "express";
import { check } from "express-validator";

import { createMenu } from "../../controllers/db/menu";


const router = Router()

router.post('/', createMenu)

export default router;