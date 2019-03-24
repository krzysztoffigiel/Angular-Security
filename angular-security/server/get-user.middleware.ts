import { Request, Response, NextFunction } from "express";
import { decodeJwt } from "./security.utils";

export function retrieveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {

    const jwt = req.cookies['SESSIONID'];

    // sprawdzanie czy juz jest sesja
    if (jwt) {
        handleSessionCookie(jwt, req).then(() => next())
            .catch(err => {
                console.error(err);
                next();
            });
    } else {
        next();
    }
}

async function handleSessionCookie(jwt: string, req: Request) {

    try {

        const payload = await decodeJwt(jwt);
        req['user'] = payload;

    } catch (error) {

        console.log(`Error: Could not extract user from request: ${error.message}`);

    }

}