const path = require('path');

/**
 * Path of my file
 */
var img = '/path/to/my/folder/image.jpg';

/**
 * Parse will return object from file string
 * { root: '/',
 *	 dir: '/path/to/my/folder',
 *   base: 'image.jpg',
 *	 ext: '.jpg',
 *	 name: 'image' }
 */
var imgObj = path.parse(img);

/**
 * format will convert path object to string
 * Output : /path/to/my/folder/image.jpg
 */
var formatedImg = path.format(imgObj);

/**
 * Print file path
 */
console.log('======================');
console.log(imgObj);
console.log('======================');
console.log(formatedImg);
console.log('======================');