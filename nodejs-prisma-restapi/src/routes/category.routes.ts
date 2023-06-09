import { getCategory } from "../controllers/category";
import { Router } from "express";

const router = Router();

router.get('/', getCategory);

export default router;