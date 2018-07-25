import * as _ from 'lodash';
import { BOOKS } from "./database-data";

class InMemoryDatabase {

    readAllBooks() {
        return _.values(BOOKS);
    }

}

export const db = new InMemoryDatabase();