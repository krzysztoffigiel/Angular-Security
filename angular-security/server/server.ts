import * as express from 'express';
import {Application} from 'express';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean, defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);

// REST API
