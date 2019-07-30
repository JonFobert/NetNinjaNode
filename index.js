const http = require('http')
const fs = require('fs');

//to send to a client using a server

server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'})
	const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res)
});
//setup node to listen to port 3000
server.listen(3000, '127.0.0.1')
//good practice to add this:
console.log('listening to port 3000')