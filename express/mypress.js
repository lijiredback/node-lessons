const http = require('http');
const url = require('url');

const router = []; 

class Application {
    get(path, handler) {
        if (typeof path === 'string') {
            router.push({
                path,
                method: 'get',
                handler,
            });
        }
    };
    listen(port, execution) {
        const server = http.createServer((req, res) => {
             // 未完成
        });
    }
}


// 工厂函数
module.exports = function createApplication() {
    return new Application();
};