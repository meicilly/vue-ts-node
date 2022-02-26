const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")
dotenv.config()
//console.log(process.env)
export const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
export const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));

export const {
    APP_HOST,
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
} = process.env


