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
    skill: string;
}

let developer: Developer;
let person: Person;
developer = new Person();
// person = developer;

