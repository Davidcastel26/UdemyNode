import { Router } from "express";
import { check } from "express-validator";

// here we need to get our functions 
import { deleteUser, getUser, getUserAll, postUser, updateUser } from "../controllers/user";
// helpers
import { existUserById, isValidRole, mailExits } from "../helpers/db-validator";
// middlewares
import { validationAreas } from "../middlewares/validations";
import { validateJWT } from "../middlewares/validation_jwt";
import { isOnlyAdminRole } from "../middlewares/validate_roles";

const router = Router();

router.get('/', getUserAll)

router.get('/:id', getUser)

router.post('/', [
    check('name', 'Name is a must').not().isEmpty(),
    check('password','Pass must be more than 6 digits').isLength({min:6}),
    check('mail','Mail not valid').isEmail(),
    check('mail').custom( mailExits ),
    // check('rol','its not a valid rol').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rolesId').custom( isValidRole ),
    validationAreas 
], postUser)

router.put('/:id', [
    check('id').custom(existUserById),
    check('rolesId').custom( isValidRole ),
    validationAreas
], updateUser)

router.delete('/:id', [
    validateJWT,
    isOnlyAdminRole,
    check('id').custom(existUserById),
    validationAreas
], deleteUser)

export default router;