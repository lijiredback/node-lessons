const Kob = require('./kob');
const app = new Kob();

app.use((req, res) => {
    res.writeHead(200);
    res.end('Hello Kob');
});

app.listen(3000);