import { AppDataSource } from "./data-source"


import express, {} from 'express'


import apiRoutes from './modules/auth/routes'
import apiUsers from "./modules/users/routes"
//import apiDollar from "./modules/dollar/routes" //faltan hacer
//import apiRestCountries from "./modules/countries/routes" //faltan hacer

import {PORT, application} from './env/environments'

const app = express()

AppDataSource.initialize().then(async () => {

    const prefix = '/api'

    // routes 
    app.use(`${prefix}/auth`, apiRoutes)
    app.use(`${prefix}/users`, apiUsers)
    
    app.listen(PORT, () => {
        console.log('el servidor esta funcionando en el puerto:' , PORT)
        console.log(`${prefix}/usuario`)
        console.log(`Mode ${application.NODE_DEV ? 'Desarrollo' : 'Produccion'}`)
    })
 
    console.log('*** conexion con la base de datos es ESTABLE y esto se verifica primero ***')
}).catch(error => console.log(error))
