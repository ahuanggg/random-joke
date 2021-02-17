const getRandomJoke = (num) => {
	const jokes = [
		{
			q: 'Why did the chicken cross the road?',
			a: 'To get to the other side!',
		},
		{
			q: 'I dont trust stairs',
			a: 'They are always up to something!',
		},
		{
			q: 'Dad, did you get a haircut?',
			a: 'No, I got them all cut!',
		},
		{
			q: 'My wife is really mad at the fact that I have no sense of direction.',
			a: 'So I packed up my stuff and right!',
		},
		{
			q: 'Why wont eggds tell jokes?',
			a: 'They would crack each other up',
		},
		{
			q: 'Why cant a nose be 12 inches long?',
			a: 'Because then it would be a foot!',
		},
		{
			q: 'What concert cost just 45 cents?',
			a: '50 Cent featuring Nickelback!',
		},
		{
			q: 'Why did the math book look so sad?',
			a: 'Becuase of all its problems!',
		},
		{
			q: 'What do you call cheese that is not yours',
			a: 'Nacho Cheese!',
		},
		{
			q: 'Here is a joke for your dogs',
			a: 'woof woof woof? woof woof!',
		},
	];

	// console.log(jokes[num]);
	return JSON.stringify(jokes[num]);
};

const getRandomNumber = (min, max) => {
	const min2 = Math.ceil(min);
	const max2 = Math.floor(max);
	return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};

const getRandomJokeResponse = (request, response) => {
	const num = getRandomNumber(0, 9);
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(getRandomJoke(num));
	response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
