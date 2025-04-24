// @ts-nocheck

import express from 'express';
import { login } from './controllers/login.js';
import { register } from './controllers/register.js';

const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login);

export default userRoutes;     