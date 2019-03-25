import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
import * as argon2 from 'argon2';
import { validatePassword } from './password-validation';
import { randomBytes } from 'crypto';
import { sessionStore } from './session.store';
import { createSessionToken } from './security.utils';

export function createUser(req: Request, res: Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {
        createUserAndSession(res, credentials).catch((err) => {
            console.error(`An error occured while new user creating: ${err}`);
            res.sendStatus(500);
        });
    }

}

async function createUserAndSession(res: Response, credentials) {

    console.log(`Password: ${credentials.password}`);

    var passArr: Array<string> = [];

    passArr = await generateRandomMasks();

    console.log(`Masks array: ${passArr}`);

    var preparedMasks: Array<string> = await prepareMasks(passArr, credentials.password);

    console.log(`Hash masks array: ${preparedMasks}`);

    var preparedMasks: Array<string> = await hashMasks(preparedMasks);

    console.log(`Final  hashed masks array: ${preparedMasks}`);

    const passwordDigest = await argon2.hash(credentials.password);

    const user = db.createUser(credentials.email, passwordDigest, preparedMasks);

    const sessionToken = await createSessionToken(user);

    // const sessionId = await randomBytes(32).toString('hex'); 

    // console.log('sessionId: ', sessionId);

    // sessionStore.createSession(sessionId, user);

    // res.cookie('SESSIONID', sessionId, { httpOnly: true, secure: true });

    res.cookie('SESSIONID', sessionToken, { httpOnly: true, secure: true });

    res.status(200).json({ id: user.id, email: user.email });

}

async function generateRandomMasks() {

    var masksArray: Array<string> = [];

    for (let i = 0; i < 20; i++) {

        var mask: string = '';

        while (mask.length !== 4) {
            var randChar = (Math.floor(Math.random() * 10)).toString();
            if (mask.indexOf(randChar) === -1) mask += randChar;
        }

        if (masksArray.indexOf(mask) === -1) masksArray.push(mask);

    }

    return masksArray;

}

async function prepareMasks(masksArray: Array<string>, password: string) {

    var preparedPassArray: Array<string> = [];

    masksArray.forEach(element => {

        var preparedHash: string = '';

        for (let i = 0; i < element.length; i++) {
            preparedHash += password.charAt(Number(element[i]));
        }

        preparedPassArray.push(preparedHash);

    });

    return preparedPassArray;

}

async function hashMasks(preparedMasksArray: Array<string>) {

    var tempArray: Array<string> = [];

    for(let prepMask of preparedMasksArray) {
        tempArray.push(await argon2.hash(prepMask));        
    }

    return tempArray;
}
