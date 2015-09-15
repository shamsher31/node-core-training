var crypto = require('crypto');

// Checkout this http://stackoverflow.com/questions/8855687/secure-random-token-in-node-js

function secureToken() {
  return crypto.randomBytes(16).toString('hex');
}

console.log(secureToken());
// 7b6b45d70915a79d1e6dda682045163a