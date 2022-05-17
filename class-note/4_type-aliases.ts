// 인터페이스는 확장이 가능 하지만,
// interface Person {
//     name: string;
//     age: number;
// }


// 타입은 확장이 불가능함!
type Person = {
    name: string;
    age: number;
}

// let seho: Person = { 
//     name: '세호',
//     age: 30
// }

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };

function getTodo(todo: Todo) {
    
}