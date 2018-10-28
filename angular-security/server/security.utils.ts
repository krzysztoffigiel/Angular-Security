
import moment = require("moment");
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

export const randomBytes = util.promisify(crypto.randomBytes);

// crypto.randomBytes(32, (err, num) => {
//     console.log(num);
// });

// randomBytes(32).then((num) => {
//     console.log(num);
// }).catch(err => {console.error(err)});

const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const SESSION_DURATION = 240;
