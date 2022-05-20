// interface
interface Developer {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
//     skill: string;
// }

class Person {
    name: string;
    // skill: string;
}

// ********** 부분집합 개념과 유사 ***********
let developer: Developer;
let person: Person;
developer = new Person();   // 작은 건 큰 걸로 못 들어감
person = developer;         // 큰거는 작은 걸로 들어갈 수 있음. 포함하기 때문에


// 함수
let add = function(a: number) {
    // console.log(a);
}
let sum = function(a: number, b: number) {
    // return a + b;
}
sum = add;          // 작은 건 큰 걸로 들어갈 수 있음.
add = sum;          // 큰 거는 작은 걸로 못 들어감.



// 제네릭
interface Empty<T> {
    // ..
}
let empty1: Empty<string>;
let empty2: Empty<string>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;