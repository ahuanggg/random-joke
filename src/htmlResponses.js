// here's our 404 page
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

const get404response = (request, response) => {
	response.writeHead(404, { 'Content-Type': 'text/html' });
	response.write(errorPage);
	response.end();
};

module.exports.get404response = get404response;
