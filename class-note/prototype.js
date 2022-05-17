let user = { name: 'John', age: 34 };
let admin = {}

admin.__proto__ = user;

console.log(admin.name);
console.log(admin.age);
console.log(admin);

admin.role = 'admin';
console.log(admin);

/////////////////////////////////////////////////////////////////////////////

let obj = { a: 10 };        // undefined

Object.keys(obj);           // ["a"]
obj.hasOwnProperty('a');    // true

console.log(obj);

// obj 는 상위 __proto__가 Object이기 때문에, obj. 했을때 쓸 수 있는 메서드를 사용할 수 있음.

let arr = [];

// arr 는 상위 __proto__가 Array이기 때문에, arr. 했을때 쓸 수 있는 메서드를 사용할 수 있음.