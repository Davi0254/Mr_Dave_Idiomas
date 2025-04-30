// @ts-nocheck

import express from 'express';
import cors from 'cors';
import userRoutes from './rotas.js';

const app = express();

const allowedOrigins = [
    'mrdave-idiomas.netlify.app',
    'http://localhost:5173'
];

app.use(express.json());

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

app.use(userRoutes);

app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

export default app;