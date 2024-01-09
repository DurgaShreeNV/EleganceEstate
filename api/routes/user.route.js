import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

//The reason we use get here is that we only want to get information, we don't want to send anything, if we want to send to database then we have to use put, post
router.get('/test', test);

export default router;