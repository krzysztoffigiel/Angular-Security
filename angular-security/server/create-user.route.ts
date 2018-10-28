import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
import * as argon2 from 'argon2';
import { validatePassword } from './password-validation';
import { randomBytes } from 'crypto';
import { sessionStore } from './session.store';

export function createUser(req: Request, res: Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {

        if (errors.length > 0) {
            res.status(400).json({ errors });
        } else {
            createUserAndSession(res, credentials).catch((err) => {
                console.log('An error occured while new user creating', err);
                res.sendStatus(500);
            });
        }
    }
}

async function createUserAndSession(res: Response, credentials) {

    const passwordDigest = await argon2.hash(credentials.password);

    const user = db.createUser(credentials.email, passwordDigest);

    const sessionId = await randomBytes(32).toString('hex'); // TODO: Check it!

    console.log('sessionId: ', sessionId);

    sessionStore.createSession(sessionId, user);

    res.cookie('SESSIONID', sessionId, {httpOnly: true, secure: true});

    // res.cookie('SESSIONID', sessionToken, { httpOnly: true, secure: true });

    res.status(200).json({ id: user.id, email: user.email });

}
