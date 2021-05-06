import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_HOST || 'airportdb';
const MYSQL_USER = process.env.MYSQL_HOST || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_HOST || '';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const SERVER = {
    hostname: HOSTNAME,
    port: PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;