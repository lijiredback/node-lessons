//1,引入模块
const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

//2,express 实例
const app = express();

// 3,app.get
app.get('/', (req, res, next) => {
    // 用 superagent 抓取 https://cnodejs.org/ 的内容
    superagent.get('https://cnodejs.org')
        .end((err, sres) => {
            // 常规的错误处理
            if(err) {
                return next(err);
            }
            // sres.text 里面存储着网页的 html 内容， 将它传给 cherrio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下的就是 jquery 的内容
            const $ = cheerio.load(sres.text);
            let items = [];
            $('#topic_list .topic_title').each((idx, element) => {
                const $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href'),
                    author: $element.parents('.cell').find('img').attr('title'),
                });
            })
            res.send(items);
        });
});

app.listen(3000, () => {
    console.log('app is running at port 3000');
});