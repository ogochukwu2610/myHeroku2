
var http= require("http");
const PORT = process.env.PORT || 3000;
http.createServer(function (request, response) {
//send the http header
//HTTP status:200:ok
//content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});

//send the response body as "Hello World"
response.end('Hello World\n');
}).listen(PORT, () => {
	console.log('Our app is running on port ${PORT}');
});


