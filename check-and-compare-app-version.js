var semver = require('semver');
 
// Check and compare module or app version
semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null
semver.clean('  =v1.2.3   ') // '1.2.3'
semver.gt('1.2.3', '9.8.7') // false
semver.lt('1.2.3', '9.8.7') // true