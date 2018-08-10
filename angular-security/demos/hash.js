
var crypto = require('crypto');

var password = 'password';

var hash = crypto.createHash('sha256').update(password).digest('hex');

console.log("Result of hashing function for password " + "'" + password + "'" + " is \n\n" + hash + "\n\n");
