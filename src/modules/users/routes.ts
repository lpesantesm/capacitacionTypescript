import {NextFunction, Request, Response, Router} from "express"
import { UserI, UsersQueryParamsI } from '../../interfaces/user.interface';
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder";
import { getAllUsersController, getUsersDatabase } from "./controller";
import { sinTokenMdw } from "../../middleware/sinTokenMdw";
import { EntityManager } from "typeorm";

const routes = Router();

routes.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllUsersController()
        res.json(response)
    } catch (error) {
        throw error
    }
})

routes.get(
    '/database', 
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

export default routes