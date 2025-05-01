import bcrypt from "bcryptjs";
import pool from "../db.js";
import { errorHandler } from "../errorHandler.js";

export const register = async (req, res) => {
    const { nome_completo, email, senha } = req.body;

    if (!nome_completo || !email || !senha) {
        return res.status(400).json({ error: 'todos os campos são necessários' })
    }

    try {
        const checkUserQuery = 'SELECT 1 FROM alunos WHERE email = $1';
        const existingUserResult = await pool.query(checkUserQuery, [email]);

        if (existingUserResult.rowCount > 0) {
            return res.status(400).json({ error: 'O usuário já existe' });
        }

        const senha_hash = await bcrypt.hash(senha, 10);

        const insertQuery = `
            INSERT INTO alunos (nome_completo, email, senha_hash)
            VALUES ($1, $2, $3)
`;
        await pool.query(insertQuery, [nome_completo, email, senha_hash]);

        res.json({
            message: 'Usuario registrado com sucesso!',
            redirectTo: '/pages/login'
        });

    } catch (error) {
        errorHandler(error, res)
    };
}