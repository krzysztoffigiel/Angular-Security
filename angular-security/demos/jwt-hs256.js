

var jwt = require('jsonwebtoken');

var secretKey = 'secret-key';

var payload = {
  sub: '123456789',
  name: 'Alice',
  manager: true
};

// create a JWT
var newToken = jwt.sign(payload, secretKey, {
    algorithm: 'HS256'
});

console.log("JWT created:", newToken);
