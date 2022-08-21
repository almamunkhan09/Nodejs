//
const http = require('http');



const server = http.createServer((req,res) => {
    res.write('<h1>Hello from the new Server </h1>');
    res.end();
});

server.listen(7000);