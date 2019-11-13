const os = require('os');
const cpuStat = require('cpu-stat');

function stat() {
    const mem = os.freemem / os.totalmem * 100;
    console.log(`内存占用率为 ${mem.toFixed(2)}%`);

    cpuStat.usagePercent((err, percent) => {
        if (err) throw new Error;
        console.log(`Cpu 使用率为 ${percent.toFixed(2)}%`);
    });
}

module.exports = stat;
