import { sessionStore } from './session.store';
import { Request, Response } from 'express';

export function getUser(req: Request, res: Response) {

    const sessionId = req.cookies['SESSIONID'];

    const user = sessionStore.findUserBySessionId(sessionId);

    // const user = {
    //     email: 'test@gmail.com'
    // };
    if(user) {
        res.status(200).json(user);
    } else {
        res.sendStatus(204);
    }
}