import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index); // Lista usuarios [id, nome, email]
// router.get('/me', loginRequired, userController.show); // Lista o proprio usuario

router.post('/', loginRequired, userController.store); // Cria um usuario
router.put('/', loginRequired, userController.update); // Atualiza o proprio cadastro
router.delete('/', loginRequired, userController.delete); // Deleta seu cadastro

export default router;
