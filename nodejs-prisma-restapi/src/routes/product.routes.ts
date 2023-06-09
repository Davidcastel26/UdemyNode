import { getProducts,   
         getProduct } from "../controllers/product";
import { Router } from "express";

const router = Router();

router.get('/',getProducts)
router.get('/:id', getProduct)

export default router;