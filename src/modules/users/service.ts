import { UserI } from "../../interfaces/user.interface"
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder"

export class UserService {

    async GetUsersApiJsonPlaceholder(){
        // ? Es el que interactua con le repsoitorio (BD)
        // ? Apis Externos
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
                
            return nuevoArregloUsuario
        } catch (error) {
            throw error
        }
    }

}