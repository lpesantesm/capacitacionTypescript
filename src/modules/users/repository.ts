import { EntityManager } from "typeorm"
import { User } from "../../entities/User"

export default class UserRepository{
    async findUsers(cnx: EntityManager,filtro: string, estado: string){
    
        const query =cnx.createQueryBuilder()
        .select(["user"])
        .from(User, "user")
        
        if (estado){
            query.andWhere("user.state = :estado",{ estado: estado.toUpperCase() ?? 'A'})
        }

        if(filtro){
            query.andWhere("concat(upper(user.firstName),' ', upper(user.lastName)) LIKE :search",{ search:`%${filtro.trim().toUpperCase()}%` })
        }

        console.log(query.getSql())

        return await query.getRawMany<User>();
       
    
    }

}
