//@ts-nocheck

import bcrypt from "bcryptjs";
import pool from "../db.js";
import { errorHandler } from "../middleware/errorHandler.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const queryText = `
        SELECT id, email, senha_hash, verificado
        FROM alunos
        WHERE email = $1
        `;

        const result = await pool.query(queryText, [email]);

        console.log(result.rows[0].verificado)

        if (result.rowCount === 0) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const { id, senha_hash } = result.rows[0];

        if (result.rows[0].verificado !== true) {
            return res.status(403).json({ error: 'email não verificado, por favor verifique sua caixa de entrada' })
        }

        const isMatch = await bcrypt.compare(senha, senha_hash);

        if (!isMatch) {
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        // Obter os cursos do aluno
        const cursosQuery = `
         SELECT curso_url FROM alunos_cursos WHERE aluno_id = $1
        `;
        const cursosResult = await pool.query(cursosQuery, [id]);

        const cursos = cursosResult.rows.map(rows => rows.curso_url);

        // Gerar o token JWT com os cursos permitiods
        const token = jwt.sign({ id, email, cursos }, process.env.JWT_SECRET, { expiresIn: '2h' });

        return res.status(200).json({ message: 'Sucesso no login', email, token });
    } catch (error) {
        errorHandler(error, res);
    }
}

