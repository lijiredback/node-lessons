// koa 是一个类
const Koa = require('koa');
const app = new Koa();

// ctx，上下文
// next, 中间件
// app.use((ctx, next) => {
//     ctx.body = [
//         {
//             name: 'Tom',
//         }
//     ];
//     next();
//     ctx.body.push(
//         {
//             name: 'Lee',
//         }
//     )
// });

// app.use((ctx, next) => {
//     ctx.body.push(
//         {
//             name: 'Jerry'
//         }
//     );
// });

// 静态服务
app.use(require('koa-static')(__dirname + '/'));

// router
const router = require('koa-router')();

router.get('/string', async (ctx, next) => {
    ctx.body = 'String';
});

router.get('/json', async (ctx, next) => {
    ctx.body = [
        {
            name: 'JSON'
        }
    ];
});

app.use(router.routes());



app.listen(3000);