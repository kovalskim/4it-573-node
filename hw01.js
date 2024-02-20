
const min = 1;
const max = 10;
const maxAttempt = 5;

let counter = 0;


while(counter < maxAttempt) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    let userNumber = parseInt(prompt('Enter your number (from ' + min + ' to ' + max + '):'));

    if(randomNumber === userNumber) {
        window.alert('You are winner!');
        break;
    } else {
        if(counter === 0) {
            window.alert('You are looser!');
        } else if (counter === maxAttempt-1) {
            window.alert('You are looser anyway!');
        } else {
            window.alert('You are still looser!');
        }
        counter++;
    }
}
