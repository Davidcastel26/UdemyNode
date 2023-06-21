import { Router } from "express";
import { check } from "express-validator";

// controllers
import { craeteRole, 
         getAllRoles, 
         removeRole} from "../../controllers/DBcontrollers/roles";

import { validationAreas } from "../../middlewares/validations";
import { existRoleById } from "../../helpers/db-validator";

const router = Router()

router.get('/', getAllRoles )

router.post('/',[
    check('role','Role is a must').not().isEmpty(),
    check('role','Must be at least 4 characters').isLength({min:4}),
    validationAreas
], craeteRole)

router.delete('/:id', [
    check('id').custom( existRoleById ),
    validationAreas
], removeRole)

export default router;