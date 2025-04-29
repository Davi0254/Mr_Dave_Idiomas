// init-db.js
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import pool from '../config.js'; // ajuste caminho se necessário

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sql = fs.readFileSync(join(__dirname, 'schema.sql')).toString();

try {
    await pool.query(sql);
    console.log('✅ Tabelas criadas com sucesso!');
    process.exit(0);
} catch (err) {
    console.error('❌ Erro ao criar tabelas:', err);
    process.exit(1);
}

