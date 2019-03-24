import { DbUser } from './db-user';
import * as _ from 'lodash';
import { BOOKS, USERS } from "./database-data";

class InMemoryDatabase {

    userCounter = 0;

    readAllBooks() {
        return _.values(BOOKS);
    }

    findUserByEmail(email: string): DbUser {

        console.log('Finding user by email:', email);

        const users = _.values(USERS);

        const user = _.find(users, user => user.email === email);

        console.log(`User: ${user}`);

        return user;

    }

    findUserById(userId: string): DbUser {

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

        const usersPerEmail = _.keyBy(_.values(USERS), 'email');

        if (usersPerEmail[email]) {
            const message = 'User already exists with assigned email address: ' + email;
            console.error(message);
            throw new Error(message);
        }

        this.userCounter++;

        const id = this.userCounter++;

        const user: DbUser = {
            id,
            email,
            passwordDigest
        };

        USERS[id] = user;

        console.log("Users: ", USERS);

        return user;

    }

}

export const db = new InMemoryDatabase();