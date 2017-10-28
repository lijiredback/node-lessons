### 使用 superagent 和 cheerio 完成简单爬虫

#### 目标

当在浏览器中访问 ```http://localhost:3000``` 时，输出 CNode（http://cnodejs.org/）社区首页的所有帖子的标题和链接，以json 的形式。

输出形式
```
[
    {
        "title": "【公告】发招聘帖的同学留意一下这里"，
        "href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12",
    },
    {
        "title": "发布一款 Sublime Text 下的 JavaScript 语法高亮插件",
        "href": "http://cnodejs.org/topic/54207e2efffeb6de3d61f68f"
    }
]
```

#### 挑战

访问 ```http://localhost:3000``` 时，输出包括主题的作者

示例：
```
[
  {
    "title": "【公告】发招聘帖的同学留意一下这里",
    "href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12",
    "author": "alsotang"
  },
  {
    "title": "发布一款 Sublime Text 下的 JavaScript 语法高亮插件",
    "href": "http://cnodejs.org/topic/54207e2efffeb6de3d61f68f",
    "author": "otheruser"
  }
]
```

#### 知识点

1.学习使用 superagent 抓取网页
2.学习使用 cheerio 分析网页

#### 课程内容

对于 Node.js 的异步特性，爬虫是一个不错的学习场景。

这回需要用到三个依赖： 分别是 express 、 superagent 和 cheerio。

superagent(http://visionmedia.github.io/superagent/ ) 是个 http 方面的库，可以发起 get 或 post 请求。

cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。

