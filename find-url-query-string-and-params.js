const url = require('url');

/**
 * Path of my url
 */
var websiteUrl = 'http://www.about.me/shamsher?login=true#attempt=2';

/**
 * Parse will return object from url string
 * { protocol: 'http:',
 *	 slashes: true,
 *	 auth: null,
 *	 host: 'www.about.me',
 *	 port: null,
 *	 hostname: 'www.about.me',
 *	 hash: '#attempt=2',
 *	 search: '?login=true',
 *	 query: 'login=true',
 *	 pathname: '/shamsher',
 *	 path: '/shamsher?login=true',
 *	 href: 'http://www.about.me/shamsher?login=true#attempt=2' }
 */
var urlObj = url.parse(websiteUrl);

/**
 * format will convert url object to string
 * Output : http://www.about.me/shamsher?login=true#attempt=2
 */
var formatedURL = url.format(urlObj);

/**
 * Print file path
 */
console.log('======================');
console.log(urlObj);
console.log('======================');
console.log(formatedURL);
console.log('======================');