//? aqui se utiliza los ORM

import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../connections/ormConfig";

//@EntityRepository(User)
//export default class UserRepository extends Repository<User> {
//    async GetUsers() {
//       // ? Interactua directamente con la base de datos
//        return this.createQueryBuilder()
//    }
//}

export const UserRepository = AppDataSource.getRepository(User)
// ! configurar query personalizados
