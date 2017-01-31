var server = require('./server');
var router = require('./router');
var handler = require('./handler');

// creating object for handler
// so that it knows that to handle home or review page

var handle = {};

handle['/home_handler'] = handler.home_handler;
handle['/review_handler'] = handler.review_handler;

// now pass the handle object also to the startserver
server.startserver(router.route,handle);

// looks fine now
