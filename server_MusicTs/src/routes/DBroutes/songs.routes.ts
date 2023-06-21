import { Router } from "express";
import { check } from "express-validator";

//Controllers
import { getAllSongs, 
         getSong, 
         postSong} from "../../controllers/DBcontrollers/songs";

//middlewares
import { validationAreas } from "../../middlewares/validations";

// Helpers
import { existArtistId, 
         existSongId, 
         roleExist } from "../../helpers/db-validator";

const router = Router()

router.get('/', getAllSongs )

router.get('/:id', [
    check('id').custom( existSongId ),
    validationAreas
], getSong)

router.post('/', [
    check('song','Song is a must').not().isEmpty(),
    check('realiceDate','Realice Date is a must').not().isEmpty(),
    check('artistId').custom( existArtistId ),
    check('roleId').custom( roleExist ),
    validationAreas
], postSong )

export default router;