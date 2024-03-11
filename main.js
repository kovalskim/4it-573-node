import chalk from 'chalk'
import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    console.log('incoming request', req.url);

    console.log(req.url);
    let file;

    if(req.url === "/") {
        file = 'public/index.html';
    } else {
        file = 'public/' + req.url.slice(1);
    }

    console.log(file);

    //console.log('method', req.method);
    //console.log('headers', req.headers);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(file, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.write('Not found');
            console.error("chyba cteni");
        } else {
            res.statusCode = 200;
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000, () => {
    console.log(chalk.green('Server listening'));
});

//console.log(chalk.bgRed("Hello, World!"));
//console.log(chalk.bgRed(chalk.blue("Hello, World!")));