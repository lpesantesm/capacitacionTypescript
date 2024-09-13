import {config} from "dotenv"
config();
export const PORT = process.env.PORT ?? 3000 //nullish coalesing

export const API_JSONPLACEHOLDER = process.env.API_JSONPLACEHOLDER
export const API_DOLLAR= process.env.API_DOLLAR
export const API_RESTCONTRIES=process.env.API_RESTCONTRIES

export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
export const DB_NAME = process.env.DB_NAME
export const DB_SYNC = process.env.DB_SYNC === 'true'


export const application = {
    get NODE_DEV(){
        return process.env.NODE_DEV === 'true' ? true : false //ternario 
    }
}