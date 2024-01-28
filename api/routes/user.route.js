import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
//We have to use verify token here and to use it we have to import it first 
//Once verified we have to send it to next function that is updateUser 
router.post('/update/:id', verifyToken, updateUser);

export default router;