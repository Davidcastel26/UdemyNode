import { getCategories,
         getCategory } from "../controllers/category";
import { Router } from "express";

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategory)

export default router;   