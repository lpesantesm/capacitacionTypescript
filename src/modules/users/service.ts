import { User } from "../../entities/User"
import { UserI } from "../../interfaces/user.interface"
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder"
import { UserRepository } from "./repository"

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


    async GetAllUserDatabase (filtro: string, estado:string){

        try{
            //const response = await UserRepository.find({where: {id: 10}})
            //const response1 = UserRepository.findOne({where : {id: 10}})
            //const response2 = UserRepository.findOne({where : {id: 10}})
            //const response3 = UserRepository.findOne({where : {id: 10}})
            //const response4 = UserRepository.findOne({where : {id: 10}})

            //const arregloDePromesas =[response1, response2, response3, response4]

            //await Promise.all(arregloDePromesas)

            const query = UserRepository.createQueryBuilder()
            .select(["user"])
            .from(User, "user")
                        

            if(filtro){
                query.where("upper(user.firstName) LIKE upper(:search)",{ search:'%${filtro}%' })
            }

            const response =await query.getMany()
            return response
        } catch (error){
            throw error
        }
    }
}