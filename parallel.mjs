import fs from 'fs/promises'

let count;

try {
    const data = await fs.readFile('instrukce.txt');
    count = Number(data.toString());
} catch {
    console.error('File with instruction does not exist');
    count = 0;
}

//console.log(count);

let filesToWrite = [];
let dataToWrite = [];

for (let i = 0; i < count; i++) {
    filesToWrite.push(i + '.txt');
    dataToWrite.push('Soubor ' + i);
}

let writePromises = [];

for (const fileName of filesToWrite) {
    const index = filesToWrite.indexOf(fileName);
    writePromises.push(await fs.writeFile(fileName, dataToWrite[index]));
}

Promise.all(writePromises)
    .then(() => {
        console.log('Done!');
    })
    .catch((error) => {
        console.error('Write error!');
    }
);
