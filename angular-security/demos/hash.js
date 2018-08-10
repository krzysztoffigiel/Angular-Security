
var crypto = require('crypto');

var password = '123456789';

// for more efficient cryptography attacks prevent

var aliceSalt = 1;

var bobSalt = 2;



var hash = crypto.createHash('sha256').update(password + aliceSalt).digest('hex');

console.log("Result of hashing function for password " + "'" + password + "'" + " is \n\n" + hash + "\n\n");
