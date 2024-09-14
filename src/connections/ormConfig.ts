import "reflect-metadata"
import { DataSource } from "typeorm"
import entities from "../entities" 
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_SYNC, DB_USER } from "../env/environments"

    // AQUI UN EJEMPLO DE DESESTRUCTURACION
    /*    const perro = {
            nombre: 'Firulais',
            edad: 2,
            raza:'Golden Retriver'
        } 

        const { nombre, ...otro} = perro
        console.log (nombre)
        console.log (otro)
    */
   
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: DB_SYNC,
    logging: false,
    entities: [...entities],  // ! los 3 puntos indican DESESTRUCTURACION
    migrations: [],
    subscribers: [],
})
