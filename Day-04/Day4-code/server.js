const { createServer } = require('http'); // Use 'http' for better compatibility

const localhost = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Node JS");
});

server.listen(port, localhost, () => {
    console.log(`Running on: http://${localhost}:${port}`);
});
