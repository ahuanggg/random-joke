console.log('First web service starting up ...');
const http = require('http');
const url = require('url');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const getRandomJoke = (num) => {
	jokes = [
		{
			q: 'Why did the chicken cross the road?1',
			a: 'To get to the other side!',
		},
		{
			q: 'I dont trust stairs1',
			a: 'They are always up to something!',
		},
		{
			q: 'Dad, did you get a haircut?1',
			a: 'No, I got them all cut!',
		},
		{
			q:
				'My wife is really mad at the fact that I have no sense of direction.1',
			a: 'So I packed up my stuff and right!',
		},
		{
			q: 'Why wont eggds tell jokes?1',
			a: 'They would crack each other up',
		},
		{
			q: 'Why cant a nose be 12 inches long?1',
			a: 'Because then it would be a foot!',
		},
		{
			q: 'What concert cost just 45 cents?1',
			a: '50 Cent featuring Nickelback!',
		},
		{
			q: 'Why did the math book look so sad?1',
			a: 'Becuase of all its problems!',
		},
		{
			q: 'What do you call cheese that is not yours1',
			a: 'Nacho Cheese!',
		},
		{
			q: 'Here is a joke for your dogs1',
			a: 'woof woof woof? woof woof!',
		},
	];

	console.log(jokes[num]);
	return JSON.stringify(jokes[num]);
};

const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 5 - here's our 404 page
const errorPage = `
<html>
    <head>
        <title> 404 = File Not Found!</title>
    </head>
    <body>
        <h1> 404 - File Not Found! </h1>
        <p> Check your IRL, or your typing! </p>
        <p> :-0 </p>
    </body>
</html>
`;

const onRequest = (request, response) => {
	//console.log(request.headers);

	const parsedUrl = url.parse(request.url);
	const pathname = parsedUrl.pathname;
	const num = getRandomNumber(0, 10);

	if (pathname == '/random-joke') {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(getRandomJoke(num));
		response.end();
	} else {
		response.writeHead(404, { 'Content-Type': 'text/html' });
		response.write(errorPage);
		response.end();
	}
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
