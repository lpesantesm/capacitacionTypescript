import {NextFunction, Request, Response, Router} from "express"
import { UserI } from '../../interfaces/user.interface';
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder";

const routes = Router();

routes.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        // const usuarios: UserI[] = await fetch('https://jsonplaceholder.typicode.com/users').then( r => r.json())
        const usuarios = await apiJsonPlaceholder.get<UserI[]>('/users')

        const nuevoArregloUsuario = usuarios.data.map((usuario) => {

            return {
                nombre: usuario.name,
                nombreUsuario: usuario.username,
                email: usuario.email,
                telefono: usuario.phone,
                nombreCompañia: usuario.company.name
            }

        })
            
        res.json(nuevoArregloUsuario)
    } catch (error) {
        throw error
    }
})

export default routes