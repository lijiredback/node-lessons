const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/' && method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHeader('500', { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
}).listen(3000);