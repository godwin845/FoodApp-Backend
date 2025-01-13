import { Router } from 'express';
import * as userController from '../controller/userController';

const router = Router();

router.get('/users', userController.getUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);

export default router;