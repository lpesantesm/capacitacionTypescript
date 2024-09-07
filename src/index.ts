import express, {} from 'express'
import apiRoutes from './modules/auth/routes'
import {PORT, application} from './env/environments'
import apiUsers from "./modules/users/routes"
//console.log("holamundo");np
const app = express()

const prefix = '/api'

// routes 
app.use(`${prefix}/auth`, apiRoutes)
app.use(`${prefix}/users`, apiUsers)

app.listen(PORT, () => {
    console.log('el servidor esta funcionando en el puerto:' , PORT)
    console.log(`${prefix}/usuario`)
    console.log(`Mode ${application.NODE_DEV ? 'Desarrollo' : 'Produccion'}`)
})