const fs = require('fs');

// 同步
// const data = fs.readFileSync('../package.json');
// console.log(data);
// console.log(data.toString());

// 异步
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
readFile('../package.json').then(data => {
    // buffer 对象的 toString 方法
    console.log(data.toString());
})

