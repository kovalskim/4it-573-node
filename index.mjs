import fs from 'fs'

const instructionFileName = 'instrukce.txt';

let inputFileName = "";
let outputFileName = "";

function checkInstructionFile(fileData) {
    let row = fileData.toString().split(' ');

    inputFileName = row[0];
    outputFileName = row[1];

    //console.log(inputFileName);
    //console.log(outputFileName);

    // check instruction format
    if(!inputFileName || !outputFileName) {
        console.error('Bad instruction');
        return 1;
    }

    return 0;
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
        if(checkInstructionFile(data) === 0) {
            readAndWrite(inputFileName, outputFileName);
        }
    }
})