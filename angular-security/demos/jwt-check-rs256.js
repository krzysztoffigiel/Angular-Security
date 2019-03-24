


var jwt = require('jsonwebtoken');
var fs = require('fs');

var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE1NTMxNzQ5NzIsImV4cCI6MTU1MzE3NTA5Miwic3ViIjoiMSJ9.XC2skqVGwAuBhMR25d5bkDGzydHN49fFzEEOXTFB7e4-GJr2-dJa4qLQPVTzoxsPPlnknQu49wtXZkAgSZGAQZzKqkVNIxG_bxv0QwHqqjEIRRO3zs54tPP6mAZNzKVlwWXsNQOwogZFv2Cq_t9f8vHcDN1MfME-QuOWrRjAPjM2JlijXvngTiKqRn4jwu1pavLy_-4VZWhis1_ph9kgDxV2yEoueUDrqVZijNxQBk0Etf5QJh0S59AQA9IfpdaPgXQNw6CTu_Tw0TMCBobZ0Rl5ybdkAM2u5NyBn_NzLAVQQ8F8Gv-L9UxLqYNYznruYSlqjzTK6UnFBt_MEbZkPg';

var publicKey = fs.readFileSync('./demos/public.key');

const verify = jwt.verify(existingToken, publicKey);

console.log("Decoded JWT:", verify);

