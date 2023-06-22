import { Router } from "express";
import { check } from "express-validator";

import { createChef } from "../../controllers/db/chef";

const router = Router()

router.post('/', createChef)

export default router;