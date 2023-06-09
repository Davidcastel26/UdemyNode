import { getProducts,   
         getProduct, 
         postProduct,
         deleteProduct,
         updateProduct} from "../controllers/product";
import { Router } from "express";

const router = Router();

router.get('/',getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct)

export default router;