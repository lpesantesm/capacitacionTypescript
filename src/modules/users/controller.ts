import { EntityManager } from "typeorm";
import { UsersQueryParamsI } from "../../interfaces/user.interface";
import { UserService } from "./service"
import { Response } from 'express';

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