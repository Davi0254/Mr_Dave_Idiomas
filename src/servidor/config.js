// import mariadb from 'mariadb';
import mysql2 from 'mysql2'
import dotenv from 'dotenv';

// dotenv.config({path: '../.env'});

const pool = mysql2.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export default pool;

