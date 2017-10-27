// 1,引入模块
const express = require('express');
const utility = require('utility');

//2，express 实例
const app = express();

//3,app的get方法
app.get('/', (req, res) => {
    // 从 req.query 中取出我们的 q 参数
    // 如果是 post 传来的 body 数据，则在 req.body 里面， 不过 express 默认不处理 body 中的信息，需要引入https://github.com/expressjs/body-parser 这个中间件才会处理，
    // 如果分不清什么是 query , 什么是 body 的话，需要补一下 http 的知识。
    const q = req.query.q;

    // 调用 utility.md5 方法，得到 md5 之后的值。
    // utility 的 github 地址：https://github.com/node-modules/utility
    // 里面定义了很多常用且比较杂的辅助方法，可以去看看
    // const md5Value = utility.md5(q);
    const sha1Value = utility.sha1(q);
    // res.send(md5Value);
    res.send(sha1Value);
});

//4, 监听端口
app.listen(3000, (req, res) => {
    console.log('app is running at port 3000');
});
