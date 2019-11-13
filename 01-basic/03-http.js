const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // 最基本的静态服务器
        fs.readFile('./index.html', (err, data) => {
            if (err) throw new Error;
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(data);
        });
    } else if (req.url === '/users' && req.method === 'GET') {
        const json1 = [
            {
                userName: 'zhangsan',
                userId: 12,
                age: 30,
                area: '北京市'
            } 
        ];
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(json1));
    } else if (req.headers.accept.indexOf('image/*') !== -1 && req.method === 'GET') {
        fs.createReadStream('.' + req.url).pipe(res);
    }
});

server.listen(3000);
