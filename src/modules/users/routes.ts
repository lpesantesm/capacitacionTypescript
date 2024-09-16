import {NextFunction, Request, Response, Router} from "express"
import { UserI, UsersQueryParamsI } from '../../interfaces/user.interface';
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder";
import { createUserController, getAllUsersController, getUsersDatabase } from "./controller";
import { sinTokenMdw } from "../../middleware/sinTokenMdw";
import { EntityManager } from "typeorm";
import { Usuario } from "../../entities/Usuario";

const routes = Router();

routes.get('/apijson', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllUsersController()
        res.json(response)
    } catch (error) {
        throw error
    }
})

routes.get(
    '/all', 
    sinTokenMdw, 
    async(req: Request, res: Response, next: NextFunction) => {
    try {
        const params: UsersQueryParamsI =req.query
        const cnx: EntityManager = global.conn 
        const response = await getUsersDatabase(cnx, params)
        res.json(response)

    } catch (error) {
        throw error
    }

})

routes.post(
    '/create',
    sinTokenMdw, 
    async(req: Request, res: Response, next: NextFunction) => {
    try {
        const body: Usuario =req.body
        const cnx: EntityManager = global.conn 
        const response = await createUserController(cnx, body)
        res.json(response)
    } catch (error) {
        throw error
    }

})



export default routes