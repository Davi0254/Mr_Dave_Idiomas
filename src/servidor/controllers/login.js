// @ts-nocheck

import bcrypt from "bcryptjs";
import pool from "../config.js";
import { errorHandler } from "../errorHandler.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const queryText = 'SELECT email, senha_hash FROM alunos WHERE email = $1';
        const result = await pool.query(queryText, [email]);

        if (result.rowCount === 0) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const { senha_hash } = result.rows[0];

        const isMatch = await bcrypt.compare(senha, senha_hash);

        if (!isMatch) {
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' })
        return res.status(200).json({ message: 'Sucesso no login', email, token });

    } catch (error) {
        errorHandler(error, res)
    }
}