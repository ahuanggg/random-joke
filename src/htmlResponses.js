const fs = require('fs');

const error = fs.readFileSync(`${__dirname}/../client/error.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getError = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(error);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

module.exports.getError = getError;
module.exports.getCSS = getCSS;
