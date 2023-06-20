import { Router } from "express";
import { check } from "express-validator";

//Controllers
import { getAllSongs } from "../../controllers/DBcontrollers/songs";

const router = Router()

router.get('/', getAllSongs )

export default router;