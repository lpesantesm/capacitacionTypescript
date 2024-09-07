import { NextFunction, Request, Response, Router } from "express";

const routes = Router();

routes.get('/login', async (req: Request, res: Response, next: NextFunction) => {
    res.send('Mi primera api y hola mundo')

})

export default routes;