import { EntityManager } from "typeorm";
import { UsersQueryParamsI } from "../../interfaces/user.interface";
import { UserService } from "./service"
import { Response } from 'express';
import { Usuario } from "../../entities/Usuario";
import UserRepository from './repository';

const userService = new UserService()

export const getAllUsersController = async () => {
   // ? se aplicata toda la logica de negocio
   const response = await userService.GetUsersApiJsonPlaceholder()
   return response
}

export const getUsersDatabase = async (cnx: EntityManager ,params: UsersQueryParamsI) => {
   try{
      //const {estado, filtro} = params  // esto no funciona
      const response = await userService.GetAllUserDatabase(cnx, params?.filtro ?? '', params?.estado ?? '')
      return response

   }catch (error){
      throw error
   }
}

export const createUserController = async (cnx: EntityManager , data: Usuario) => {
   try{

      // ? repositorios del metodo
      const UserRepository = cnx.getRepository(Usuario)
      
      const identificacion =data.identificacion
      const user = await cnx.getRepository(Usuario).findOne({where:{identificacion}})
      
      if (user)  throw `Ya existe el usuario con identificacion: ${identificacion}`
      
      data.estado = 'I'

      const newUser = await UserRepository.save(data)

      console.log(newUser)

      return newUser

   }catch (error){
      throw error
   }
}