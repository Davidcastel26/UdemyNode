import { Router } from "express";
import { check } from "express-validator";

// controllers 
import { getAllArtists } from "../../controllers/DBcontrollers/artist";

const router = Router();

router.get('/', getAllArtists)

export default router;