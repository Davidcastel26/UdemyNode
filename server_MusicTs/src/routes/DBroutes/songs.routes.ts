import { Router } from "express";
import { check } from "express-validator";

//Controllers
import { getAllSongs, 
         getSong } from "../../controllers/DBcontrollers/songs";

//middlewares
import { validationAreas } from "../../middlewares/validations";

// Helpers
import { existSongId } from "../../helpers/db-validator";

const router = Router()

router.get('/', getAllSongs )

router.get('/:id', [
    check('id').custom( existSongId ),
    validationAreas
], getSong)

export default router;