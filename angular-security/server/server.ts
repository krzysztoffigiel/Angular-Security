import { Application } from 'express';
import * as express from 'express';
import * as fs from 'fs';
import * as https from 'https';
import * as _ from 'lodash';
import { readAllBooks } from './read-all-books.route';
import { createUser } from './create-user.route';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var path = require('path');
const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean, defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);

// REST API

app.route('/api/books')
    .get(readAllBooks);

app.route('/api/signup')
    .post(createUser);

if (options.secure) {

    const httpsServer = https.createServer({
        key: fs.readFileSync(path.resolve('key.pem')),
        cert: fs.readFileSync(path.resolve('cert.pem'))
    }, app);

    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer.listen(9000, () => console.log("HTTPS Secure Server running at https://localhost:" + httpsServer.address().port));

}
else {

    // launch an HTTP Server
    const httpServer = app.listen(9000, () => {
        console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
    });

}