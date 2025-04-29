// @ts-nocheck

import express from 'express';
import cors from 'cors';
import userRoutes from './rotas.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://mr-dave-plataforma.onrender.com',
    credentials: true
}));

app.use(userRoutes);

app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

export default app;