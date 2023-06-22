import { Router } from "express";
import { check } from "express-validator";

import { createMenu } from "../../controllers/db_controllers/menu";


const router = Router()

router.post('/', createMenu)

export default router;