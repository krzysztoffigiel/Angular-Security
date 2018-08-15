import { DbUser } from './db-user';
import * as _ from 'lodash';
import { BOOKS, USERS } from "./database-data";

class InMemoryDatabase {

    userCounter = 0;

    readAllBooks() {
        return _.values(BOOKS);
    }

    findUserByEmail(email:string) :DbUser {

        const users = _.values(USERS);

        return _.find(users, user => user.email === email);
    }

    findUserById(userId:string) :DbUser {

        let user = undefined;

        if (userId) {

            console.log("looking for userId ", userId);

            const users = _.values(USERS);

            user = _.find(users, user => user.id.toString() === userId);

            console.log("user data found:", user);
        }

        return user;

    }

    createUser(email: string, passwordDigest: string) {

        this.userCounter++;
        
        const id = this.userCounter++;

        const user: DbUser = {
            id, 
            email,
            passwordDigest
        };

        USERS[id] = user;

        return user;

    }

}

export const db = new InMemoryDatabase();