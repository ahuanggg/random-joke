// console.log('First web service starting up ...');
const http = require('http');
const url = require('url');
const query = require('querystring');
console.log(query);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const urlStruct = {
	'/random-joke': jsonHandler.getRandomJokeResponse,
	notFound: htmlHandler.get404response,
};

const onRequest = (request, response) => {
	// console.log(request.headers);

	const parsedUrl = url.parse(request.url);
	const { pathname } = parsedUrl;

	const params = query.parse(parsedUrl.query);
	const { limit } = params;

	if (pathname === '/random-joke') {
		urlStruct[pathname](request, response, params);
	} else {
		urlStruct.notFound(request, response);
	}
};

http.createServer(onRequest).listen(port);
// console.log(`Listening on 127.0.0.1: ${port}`);
