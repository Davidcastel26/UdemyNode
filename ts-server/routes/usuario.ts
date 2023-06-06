import { Router } from 'express';
import { getUser, 
        getUsers, 
        deleteUser, 
        updateUser, 
        postUser } from '../controllers/usuarios'

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export const variableX = 123;

export default router;