import express from 'express';
//Import google: 
import { signin, signup, google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
//Lets add the created function google to this and import it at the top 
router.post('/google', google);

export default router;