import { UserService } from "./service"

const userService = new UserService()

export const getAllUsersController = async () => {
   // ? se aplicata toda la logica de negocio
   const response = await userService.GetUsersApiJsonPlaceholder()
   return response
}