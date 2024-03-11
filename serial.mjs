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

for(let i = 0; i < count; i++) {
    await fs.writeFile(i + '.txt', 'Soubor ' + i);
}

console.log('Done!');