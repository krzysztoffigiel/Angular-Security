
import * as argon2 from 'argon2';
var crypto = require('crypto');

var password = 'PAssw0rd12';

// crypto.randomBytes(256, function(err, salt) {
//     crypto.pbkdf2(password, salt, 100000, 512, 'sha256', 
//     function(err, hash) {
//         console.log("The result of hashing " + "'" + password + "'" + " is \n\n" + hash.toString('hex') + "\n\n");
//     });
// });

argon2.hash(password, {type: argon2.argon2id}).then(hash => {
    console.log('Argon2id password: ', hash);
}, (err) => {
    console.err('An error occured while password hashing: ', err);
})



