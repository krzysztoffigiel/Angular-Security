var jwt = require('jsonwebtoken');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE1NTMxMDU4NDV9.dKbUGFFssLnrh96IIVSwUYQYNZr-stsrOjmYMinKkzE';


var secretKey = 'secret-key';



const verify = jwt.verify(existingToken, secretKey);


console.log("Decoded JWT:", verify);