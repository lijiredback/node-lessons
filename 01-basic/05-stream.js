const fs = require('fs');

// 创建一个读取流
const rs2 = fs.createReadStream('./01.jpg');
// 创建一个写入流
const ws2 = fs.createWriteStream('./02.jpg');
// 管道连接
rs2.pipe(ws2);
