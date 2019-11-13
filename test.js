const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <div>
                <div id="app">
                    <h1>我是标题</h1>
                    <p class="demo">哈哈哈</p>
                </div>
            </div>
        </html>
    `);
});

app.listen(3000);