import { db } from "./database";

export function readAllBooks(req, res) {

    return res.status(200).json(db.readAllBooks());
    
}