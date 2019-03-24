

import { Request, Response, NextFunction } from 'express';


export function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {

    console.log(`Req user: ${req['user']}`);

    if (req['user']) {
        next();
    }
    else {
        res.sendStatus(403);
    }


}