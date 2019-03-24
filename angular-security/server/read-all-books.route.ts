import { db } from "./database";

export function readAllBooks(req, res) {

    console.log(`Pobieram ksiazki...`)

    // const sessionId = req.cookies['SESSIONID'];

    // const isSessionValid = sessionStore.isSessionValid(sessionId);

    // if(!isSessionValid) {
    //     res.sendStatus(403); 
    // } else {
        console.log(`All books: ${db.readAllBooks()}`)
        res.status(200).json({books: db.readAllBooks()});
    // }
}