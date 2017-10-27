// 1,引入 `express` 模块，并将 express 模块 赋值给 express 变量。
const express = require('express');

// 2,调用 express 实例， 它是一个函数， 不带参数调用时，会返回一个 express 实例，将这个变量赋值给 app 变量
const app = express();

// 3,app本身（express 的实例），有很多方法。
// 包括最常用的： get()、post()、 put()/patch()、delete()。
// 在这里，我们调用其中的 get 方法，为我们的 '/' 路径，指定一个 handler 函数。
// 这个 handler 函数会接收 req 和 res 两个对象参数，它们分别是请求的 request 和 response
// request 中包含了浏览器传来的各种的信息，比如 query啊、body啊、header啊之类的，都可以通过 req 对象访问到。
// res 对象， 我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用它的 #send 方法，向浏览器输出一个字符串

app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4,定义好我们 app 的行为之后，让它监听本地的 3002 端口。
// 这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行一个命令行输出，告诉我们监听动作已完成。
app.listen(3002, () => {
    console.log('app is listening at port 3002');
}); 