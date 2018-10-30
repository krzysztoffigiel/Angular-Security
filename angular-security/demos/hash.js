
var argon2 = require('argon2');
var crypto = require('crypto');


var password = 'PAssw0rd12';

// for more efficient cryptography attacks prevent

var aliceSalt = 1;

var bobSalt = 2;

// I can add salt to the password in update method and get another results for each user that have the same password

// var hash = crypto.createHash('sha256').update(password).digest('hex');

// console.log("Result of hashing function for password " + "'" + password + "'" + " is \n\n" + hash + "\n\n");

argon2.hash(password, {type: argon2.argon2id}).then(hash => {
    console.log('The result of "PAssw0rd12" password hashing is: \n', hash + '\n');
    argon2.verify('$argon2i$v=19$m=4096,t=3,p=1$VEPI2GGbiaojCgdmU63/RA$vTy8KD9/v1X8Umm5FIiamRcw9SgVubvBIa5pHkRuCiA', password).then(match => {
        if(match) {
            // console.log('Matching with: ', '$argon2i$v=19$m=4096,t=3,p=1$VEPI2GGbiaojCgdmU63/RA$vTy8KD9/v1X8Umm5FIiamRcw9SgVubvBIa5pHkRuCiA' + ' ...')
            console.log("Password match: ", match);
        } else {
            console.log('Matching with: ', '$argon2i$v=19$m=4096,t=3,p=1$VEPI2GGbiaojCgdmU63/RA$vTy8KD9/v1X8Umm5FIiamRcw9SgVubvBIa5pHkRuCiA' + ' ...')
            console.log("Password not match!!!");
        }
    });
}, (err) => {
    console.err('An error occured while password hashing: ', err);
})


