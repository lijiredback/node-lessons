const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(url, method);
    if (method === 'GET' && url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if(err) console.log(err);
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (method === 'GET' && url === '/api/users') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([
            {
                name: 'Tom',
                age: 18
            }
        ]));
    }
})

module.exports = app;

// 4000 端口