const getRandomJoke = (limit = 1) => {
	let result = [];
	let jokes = [
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

	// track the size of the json
	var jsonCount = Object.keys(jokes).length;
	//console.log(jsonCount);

	// test if the limit is too big for the json
	if (limit > jsonCount) {
		//set limit to max size since it would be greater and user probably wants all the jokes
		limit = jsonCount;
	} else if (limit < 1) {
		//set limit to 1 because if its 0 then they want no jokes and thats bad cause jokes are good
		limit = 1;
	}

	// shuffle the array then push it into results
	shuffle(jokes);

	for (let i = 0; i < limit; i++) {
		result.push(jokes[i]);
	}

	// console.log(jokes[num]);
	return JSON.stringify(result);
};

const getRandomNumber = (min, max) => {
	const min2 = Math.ceil(min);
	const max2 = Math.floor(max);
	return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};

// shuffle array taken from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const getRandomJokeResponse = (request, response, params) => {
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(getRandomJoke(params.limit));
	response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
