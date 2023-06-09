import { getCategories,
         getCategory, 
         postCategory} from "../controllers/category";
import { Router } from "express";

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', postCategory)

export default router;   