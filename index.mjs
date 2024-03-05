import fs from 'fs'

const instructionFileName = 'instrukce.txt';

let inputFileName = "";
let outputFileName = "";

function checkInstructionFile(fileData) {
    let row = fileData.toString().split(' ');

    inputFileName = row[0];
    outputFileName = row[1];

    //TODO: check format
}

function readAndWrite(input, output) {
    fs.readFile(input, (err, data) => {
        if (err) {
            console.error(err.message);
        } else {
            fs.writeFile(output, data, (err) => {
                if(err) {
                    console.error(err.message);
                }
            })
        }
    })
}

fs.readFile(instructionFileName, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        checkInstructionFile(data);
        readAndWrite(inputFileName, outputFileName);
    }
})