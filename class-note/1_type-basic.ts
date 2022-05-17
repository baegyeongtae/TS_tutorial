// JS 문자열 선연
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1, 2, 3];

// TS 튜플
let address: [string, number] = ['gangnam', 100];       // type 뿐만 아니라 순서까지 지정해줌

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: {name: string, age: number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;