const http = require('http');
const port = rocess.env.PORT || 3000;
const app = require('./index')

const server = http.createServer(index);

server.listen(port, ()=> {console.log('app is running on localhost: ' + port)});