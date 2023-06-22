import { Router } from "express";
import { check } from "express-validator";

import { createChef } from "../../controllers/db_controllers/chef";

const router = Router()

router.post('/', createChef)

export default router;