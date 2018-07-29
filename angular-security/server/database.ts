import { DbUser } from './db-user';
import * as _ from 'lodash';
import { BOOKS, USERS } from "./database-data";

class InMemoryDatabase {

    userCounter = 0;

    readAllBooks() {
        return _.values(BOOKS);
    }

    createUser(email: string, password: string) {

        this.userCounter++;
        
        const id = this.userCounter++;

        const user: DbUser = {
            id, 
            email,
            password
        };

        USERS[id] = user;

        return user;

    }

}

export const db = new InMemoryDatabase();