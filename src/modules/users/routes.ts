import {NextFunction, Request, Response, Router} from "express"
import { UserI } from '../../interfaces/user.interface';
import apiJsonPlaceholder from "../apis/apiJsonPlaceHolder";
import { getAllUsersController } from "./controller";

const routes = Router();

routes.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllUsersController()
        res.json(response)
    } catch (error) {
        throw error
    }
})

routes.get('/database', async(req: Request, res: Response, next: NextFunction) => {
    try {
        //const response = await 
        
    } catch (error) {
        throw error
    }

})

export default routes