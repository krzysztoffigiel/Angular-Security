import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
import * as argon2 from 'argon2';
import { validatePassword } from './password-validation';

export function createUser(req: Request, res: Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {
        argon2.hash(credentials.password).then(passwordDigest => {
            const user = db.createUser(credentials.email, passwordDigest);
            console.log("USERS: ", USERS);
            res.status(200).json({id: user.id, email: user.email});
        });
        // createUserAndSession(res, credentials);
    }

    // tslint:disable-next-line:no-shadowed-variable
    // async function createUserAndSession(res: Response, credentials) {
    //     // tslint:disable-next-line:no-shadowed-variable
    //     const passwordDigest = await argon2.hash(credentials.password);

    //     const user = db.createUser(credentials.email, passwordDigest);

    //     const sessionToken = 1;

    //     res.cookie('SESSIONID', sessionToken, {httpOnly: true, secure: true});

    //     res.status(200).json({id: user.id, email: user.email});

    // }



}