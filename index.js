
var http= require("http");
fs= require('fs');
const PORT = process.env.PORT || 3000;
http.createServer(function (request, response) {
//send the http header
//HTTP status:200:ok
//content Type: text/plain
response.writeHead(200, {
	'Content-Type': 'text/plain',
	'Access-Control-Allow-Origin' : '*'
	});
	var readStream = fs.createReadStream(__dirname + 'index.html');
	//send a message
	readStream.pipe(response);
//send the response body as "Hello World"
//response.end('Hello World\n');
}).listen(PORT);
//.listen(PORT, () => {
	//console.log('Our app is running on port ${PORT}');
//});