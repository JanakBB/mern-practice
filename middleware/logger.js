const fs = require('fs');
const colors = require('colors');

function logger (req, res, next) {
    let reqColors = {
        GET: 'green',
        POST: 'yellow',
        PUT: 'blue',
        DELETE: 'red'
    };

    let start = Date.now();
    res.on('finish', () => {
        let end = Date.now()
        let today = new Date();
        let log = `${today.toLocaleDateString()} - ${req.method}, ${req.originalUrl} ${res.statusCode} ${end - start} ms`;
        console.log(log [reqColors[req.method]]);
        fs.appendFile('loggerRecord.txt', `\n${log}`, (data) => {
            console.log('logger data append in loggerRecord.txt'['blue']);
        } )
    });
    next();
}

module.exports = logger;