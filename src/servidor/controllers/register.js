import bcrypt from "bcryptjs";
import pool from "../db.js";
import { errorHandler } from "../middleware/errorHandler.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

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

        const token = jwt.sign({ nome_completo, email }, process.env.JWT_SECRET, { expiresIn: '4h' });

        const verifyLink = `https://mr-dave-plataforma.onrender.com/verifyEmail?token=${token}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'davioliveira8536@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        }, { debug: true });

        await transporter.sendMail({
            from: 'davioliveira8536@gmail.com',
            to: email,
            subject: 'Verificar email Mr.Dave Idiomas',
            text: `Clique no link para verificar seu email: ${verifyLink}`
        })

        res.status(201).json({ message: 'Por favor, verifique seu email', });

    } catch (error) {
        console.error(error);
        errorHandler(error, res)
    };
}