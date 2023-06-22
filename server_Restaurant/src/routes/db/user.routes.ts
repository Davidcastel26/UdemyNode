import { Router } from "express";
import { check } from "express-validator";

// controllers
import { getAllUsers } from "../../controllers/db/user";

const router = Router()

router.get('/', getAllUsers)

export default router;