import { EntityManager } from "typeorm"
import { Usuario } from "../../entities/Usuario"

export default class UserRepository{
    async findUsers(cnx: EntityManager,filtro: string, estado: string){
    
        const query =cnx.createQueryBuilder()
        .select(["usuario"])
        .from(Usuario, "usuario")
        
        if (estado){
            query.andWhere("user.estado = :estado",{ estado: estado.toUpperCase() ?? 'A'})
        }

        if(filtro){
            query.andWhere("concat(upper(user.nombres),' ', upper(user.apellidos)) LIKE :search",{ search:`%${filtro.trim().toUpperCase()}%` })
        }

        console.log(query.getSql())

        return await query.getRawMany<Usuario>();
       
    
    }

}
