import {Router} from 'express';
import {getAllServers, getAllUsers, createServer, createUser, removeServer, removeUser, getOneServer, getOneUser, updateServer, updateUser} from '../controllers/servers.js';

const router = Router();

router.get('/server', getAllServers);
router.post('/server', createServer);
router.get('/server/:id', getOneServer);
router.delete('/server/:id', removeServer);
router.put('/server/:id', updateServer);

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', getOneUser);
router.delete('/user/:id', removeUser);
router.put('/user/:id', updateUser);

export default router;