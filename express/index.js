const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello World');
});

app.get('/users', (req, res) => {
    res.end(JSON.stringify([ { name: 'Jerry', age: 20 } ]));
});

app.listen(3000, () => {
    console.log('success');
});