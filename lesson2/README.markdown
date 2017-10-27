### 学习使用外部模块

#### 目标
当在浏览器中访问 ```http://localhost:3000/?q=alsotang```时，输出 ```alsotang```的 MD5 值，即```bdd5e57b5c0040f9dc23d430846e68a3```。

#### 挑战
当在浏览器访问 ```http://localhost:3000/?q=alsotang```时，输出```alsotang```的 sha1 值，即```e3c766d71667567e18f77869c65cd62f6a1b9ab9```。

### 知识点
1，学习 req.query 的用法；
2，学习建立 package.json 来管理 Node.js 项目；

### 课程内容

简单来说，package.json 文件就是定义了项目的各种元信息。包括项目的名称，git repo 的地址，作者等等。最重要的是，其中定义了我们的项目依赖，这样，这个项目部署的时候，我们就不必讲 ```node_modules``` 目录也上传到服务器，服务器在拿到我们的项目时，只需要执行 ```npm install``` ，则 npm 会自动读取 package.json 中的依赖并安装在项目的 ```node_modules``` 下面，然后程序就可以在服务器上跑起来了。

在当前文件路径下 ```npm init``` 就可以了。