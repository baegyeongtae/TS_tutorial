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


// function logText(text: string): string {
//    console.log(text);
//    // text.split('').reverse().join('');
//    return text;
//}


// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }


// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText(10);
// logText('하이');
// const num = logNumber(10);
// logText(true);


function logText<T> (text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc')
str.split('')
const login = logText<boolean>(true)

// logText('a');
// logText(10);



// interface에 generic 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
  }
  
  const obj: Dropdown<number> = { value: 'abc', selected: false };





// generic의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);





// generic의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a');
logTextLength(10);
logTextLength({ length: 10 });





// generic 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");