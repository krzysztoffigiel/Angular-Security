
var crypto = require('crypto');

var storedHash = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8";

var password = "password";

var hash = crypto.createHash('sha256').update(password).digest('hex');

var isPasswordValid = (hash === storedHash);

console.log("Password is valid? " + isPasswordValid);