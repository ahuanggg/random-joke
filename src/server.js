const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
	'/random-joke': responseHandler.getRandomJokeResponse,
	'/style.css': htmlHandler.getCSS,
	notFound: htmlHandler.getError,
};

const onRequest = (request, response) => {
	const parsedUrl = url.parse(request.url);
	const { pathname } = parsedUrl;

	let httpMethod = request.method;

	let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
	acceptedTypes = acceptedTypes || [];

	const params = query.parse(parsedUrl.query);

	if (pathname === '/random-joke') {
		urlStruct[pathname](request, response, params, acceptedTypes, httpMethod);
	} else if ('/style.css') {
		urlStruct[pathname](request, response);
	} else {
		urlStruct.notFound(request, response);
	}
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
