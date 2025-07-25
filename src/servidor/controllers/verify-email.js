import jwt from 'jsonwebtoken';
import pool from "../db.js";
import { errorHandler } from "../middleware/errorHandler.js";

export const verifyEmail = async (req, res) => {
    const token = req.query.token;
    
    if (!token) {
        return res.status(400).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded?.email;

        const userResult = await pool.query(
            'SELECT * FROM alunos WHERE email = $1',
            [email]
        );

        if (userResult.rowCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await pool.query(
            'UPDATE alunos SET verificado = TRUE WHERE email = $1',
            [email]
        );

        res.status(200).json({
            message: 'Email verificado com sucesso, você já pode fazer login!',
            redirectTo: '/pages/login'
        });

    } catch (error) {
        return errorHandler(error, res)
    }
};

