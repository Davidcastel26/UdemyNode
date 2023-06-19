// Outside dependencies
import { Router } from 'express'
import { check } from 'express-validator'

// routes from CONTROLLERS/users
import { getAllUsers } from '../controllers/user';

// importing router from express
const router = Router()

// route where we will get all users 
router.get('/', getAllUsers)


export default router;