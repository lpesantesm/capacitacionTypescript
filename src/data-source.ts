import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_SYNC, DB_USER } from "./env/environments"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: DB_SYNC,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
