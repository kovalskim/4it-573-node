// console.log('Hello, World!');

import fs from 'fs'

fs.readFile('hello.txt', (err, data) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log(data.toString());
    }
});