import { getProducts,   
         getProduct, 
         postProduct} from "../controllers/product";
import { Router } from "express";

const router = Router();

router.get('/',getProducts)
router.get('/:id', getProduct)
router.post('/', postProduct)

export default router;