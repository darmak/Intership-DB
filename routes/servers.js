import {Router} from 'express';
import { getAllUsers, createUser, removeUser, updateUser} from '../controllers/usersController.js';

const router = Router();

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.delete('/user/:id', removeUser);
router.put('/user/:id', updateUser);

export default router;