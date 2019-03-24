import { Request, Response } from 'express';
import { db } from './database';

export function getUser(req: Request, res: Response) {

    // const sessionId = req.cookies['SESSIONID'];

    const userInfo = req["user"];

    console.log(`User info: ${req}`)

    if (userInfo) {

        const user = db.findUserById(userInfo.sub);

        res.status(200).json({email:user.email, id:user.id});
    }
    else {
        console.log('Get user error 204')
        res.sendStatus(204);
    }

    // const user = sessionStore.findUserBySessionId(sessionId);

    // if(user) {
    //     res.status(200).json(user);
    // } else {
    //     res.sendStatus(204);
    // }
}