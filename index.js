import http from 'http'
import fs from 'fs/promises'

const fileName = "counter.txt";

async function writeFile(number) {
    try {
        await fs.writeFile(fileName, number.toString());
    } catch (error) {
        console.error(error);
    }
}

const server = http.createServer(async (req, res) => {
    let resource = req.url.slice(1);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let number;

    try {
        const data = await fs.readFile(fileName);
        number = Number(data.toString());
    } catch (error) {
        await writeFile("0");
        number = 0;
    }

    switch (resource) {
        case "increase":
            number += 1;
            await writeFile(number);
            res.write("OK");
            break;
        case "decrease":
            number -= 1;
            await writeFile(number);
            res.write("OK");
            break;
        case "read":
            res.write(number.toString());
            break;
        default:
            res.write("Hello, World!");
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server listening...');
});
