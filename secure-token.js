const crypto = require('crypto');

function getSecureToken() {
  return crypto.randomBytes(16).toString('hex');
}

console.log(getSecureToken());
// 54dc32d7aec0659a5e8327e5d50373f1