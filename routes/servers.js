import {Router} from 'express';
import { getAllUsers, createUser, removeUser, getOneUser, updateUser} from '../controllers/servers.js';

const router = Router();

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', getOneUser);
router.delete('/user/:id', removeUser);
router.put('/user/:id', updateUser);

export default router;