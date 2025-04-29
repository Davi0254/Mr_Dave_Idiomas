// import mariadb from 'mariadb';
// import mysql2 from 'mysql2'
// import dotenv from 'dotenv';

// dotenv.config({path: '../.env'});

// const pool = mysql2.createPool({
//     host: process.env.MYSQLHOST,
//     port: process.env.MYSQLPORT,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
//     database: process.env.MYSQL_DATABASE,
// });

// @ts-nocheck

import { Pool } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config({path: '../../.env'});

console.log(process.env.DATABASE_URL)

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

export default pool;