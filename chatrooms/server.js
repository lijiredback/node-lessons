const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');


let cache = {}; // 缓存文件内容

// 请求文件不存在
function send404(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Error 404: resource not found');
    res.end();
}

// 提供文件数据
function sendFile(res, filePath, fileContents) {
    res.writeHead(200, {
        'Content-Type': mime.getType(path.basename(filePath))
    });
    res.end(fileContents);
}

// 提供静态文件服务
function serveStatic(res, cache, absPath) {
    if (cache[absPath]) { // 检查文件是否被缓存
        sendFile(res, absPath, cache[absPath]);
    } else {
        fs.readFile(absPath, (err, data) => {
            console.log(absPath);
            console.log(err);
            if (err) {
                console.log(1);
                send404(res);
            } else {
                console.log(2);
                cache[absPath] = data;
                sendFile(res, absPath, data);
            }
        })
    }
}


http.createServer((req, res) => {
    let filePath = false;
    if (req.url === '/') {
        filePath = path.resolve(__dirname, 'public/index.html');
    } else {
        filePath = path.resolve(__dirname, 'public') + req.url;
    }

    let absPath = filePath;
    serveStatic(res, cache, absPath);
}).listen(3000, () => {
    console.log('Server listening on port 3000');
});