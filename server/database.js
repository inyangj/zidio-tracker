import mysql from "mysql";
import dotenv from "dotenv";
import exp from "constants";
dotenv.config();


const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DBNAME
});

export default connection;