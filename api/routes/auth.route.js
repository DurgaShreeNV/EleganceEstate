import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

//We will be using post request
router.post('/signup', signup);

export default router;