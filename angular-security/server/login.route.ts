
import { Request, Response } from "express";
import { db } from "./database";
import * as argon2 from 'argon2';
import { DbUser, MasksDictionary } from "./db-user";
import { randomBytes } from "crypto";
import { createSessionToken, createCsrfToken } from "./security.utils";

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'krzychutriathlon@hotmail.com',
        pass: '94011504015'
    }
});

var randMask: MasksDictionary;

export function sendRandKey(req: Request, res: Response) {

    const userReq = req.body;

    const user = db.findUserByEmail(userReq.email);

    if (!user) {
        res.sendStatus(403);
    } else {

        randMask = user.passwordMasks[Math.floor(Math.random() * user.passwordMasks.length)];

        var mailOptions = {
            from: 'krzychutriathlon@hotmail.com',
            to: user.email,
            subject: `User (${user.email}) authentication in Angular Security.`,
            text: `Your password mask is ${JSON.stringify(randMask.mask)}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.error(`An error occured while email sending: ${JSON.stringify(error)}`);
            } else {
                console.log(`Email send: ${info.response}`)
            }
        });

        res.status(200).json({ mask: randMask.mask });
    }
}

export function login(req: Request, res: Response) {

    const credentials = req.body;

    const user = db.findUserByEmail(credentials.email);

    if (!user) {
        res.sendStatus(403);
    } else {
        loginAndBuildResponse(credentials, user, res);
    }

}

async function loginAndBuildResponse(credentials: any, user: DbUser, res: Response) {
    try {
        const sessionToken = await attemptLogin(credentials, user);
        const csrfToken = await createCsrfToken(sessionToken);
        console.log("Login successfull");
        res.cookie("SESSIONID", sessionToken, { httpOnly: true, secure: true });
        res.cookie('XSRF-token', csrfToken);
        res.status(200).json({ id: user.id, email: user.email });
    } catch (error) {
        console.log("Login failed");
        res.sendStatus(403);
    }
}

async function attemptLogin(credentials: any, user: DbUser) {

    // for(let mask of user.passwordMasks) {
    //     console.log(`Mask: ${mask.mask}`);
    // }

    var cnt: number = 0;

    // var randMask: string = user.passwordMasks[Math.floor(Math.random() * user.passwordMasks.length)].mask;

    // console.log(`Rand mask: ${randMask}`);

    for (let dict of user.passwordMasks) {
        cnt++;
        console.log(`credentials password: ${credentials.password}`);

        let isPasswordValid = await argon2.verify(dict.maskHash, credentials.password);
        console.log(`isPasswordValid: ${isPasswordValid}`);
        if (isPasswordValid) break;
        else if (!isPasswordValid && cnt === user.passwordMasks.length) {
            throw new Error('Password invalid');
        }
    }

    // console.log(`Password digest: ${user.passwordDigest}`);
    // const isPasswordValid = await argon2.verify(user.passwordDigest, credentials.password);

    // if (!isPasswordValid) {
    //     throw new Error("Password Invalid");
    // }

    return createSessionToken(user);
}