import { Router } from 'express';
import { check } from 'express-validator';

import { login } from '../controllers/auth';
import { validationAreas } from '../middlewares/validations';

const router = Router();

router.post('/login', [
    check('mail','Mail is a must').isEmail(),
    check('password','Password is a must').not().isEmpty(),
    validationAreas
], login  )

export default router;