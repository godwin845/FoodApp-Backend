import { Router } from 'express';
import * as productController from '../controller/productController';

const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;