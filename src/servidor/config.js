// import mariadb from 'mariadb';
import mysql2 from 'mysql2'
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const pool = mysql2.createPool({
    // host: process.env.MARIADB_HOST,
    // user: process.env.MARIADB_USER,
    // password: process.env.MARIADB_PASSWORD,
    // database: process.env.MARIADB_DATABASE,

    host: 'mysql.railway.internal',
    user: 'davi',
    password: 'ZdfVcjTOqTCNkbHByfcaQlZnCGJWileW',
    database: 'mrdave',
});

export default pool;

