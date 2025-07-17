// @ts-nocheck

import express from 'express';
import { login } from './controllers/login.js';
import { register } from './controllers/register.js';
import { verifyEmail } from './controllers/verify-email.js';

const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login);
userRoutes.get('/verifyEmail', verifyEmail);

export default userRoutes;     