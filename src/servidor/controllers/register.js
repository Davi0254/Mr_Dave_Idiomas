import bcrypt from "bcryptjs";
import pool from "../config.js";
import { errorHandler } from "../errorHandler.js";

export const register = async (req, res) => {
    const { nome_completo, email, senha } = req.body;
    
    if (!nome_completo || !email || !senha) {
        return res.status(400).json({ error: 'todos os campos são necessários' })
    }

    const [existingUser] = await pool.query('SELECT * FROM alunos WHERE email = ?',
        [email]);

    if (existingUser !== undefined) {
       return res.status(400).json({ error: 'o usuário já existe' });
    }

    try {
        const senha_hash = await bcrypt.hash(senha, 10);
        await pool.query(
            'INSERT INTO alunos (nome_completo, email, senha_hash) VALUES (?, ?, ?)',
            [nome_completo, email, senha_hash]
        )

        res.json({
            message: 'Usuario registrado com sucesso!',
            redirectTo: '/pages/login'
        });

    } catch (error) {
        errorHandler(error, res)
    };
}