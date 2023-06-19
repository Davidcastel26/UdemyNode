import { Router } from "express";

import { getAllArtist } from "../controllers/artist"

const router = Router()

router.get('/', getAllArtist )

export default router;