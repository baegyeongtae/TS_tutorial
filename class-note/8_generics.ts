// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('하이');
// logText(true);


// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText('하이');
// logText<string>('하이');


function logText(text: string | number) {
    console.log(text);
    // text.split('').reverse().join('');
    return text;
}

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

const a = logText(10);
a.split('')
logText('하이');
// const num = logNumber(10);
// logText(true);