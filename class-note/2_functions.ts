// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number): number{
    return a + b;
}

sum(10, 20, 30, 40); // 불필요한 값을 넘기면 js와는 다르게 check함

// 함수의 optional parameters
function log(a: string, b?: string) {       // ?: 는 넣어도 되고 안넣어도 되고

}
log('hello world');         // ?: 여서 다음 파라미터를 안넣어도 에러 안남.
log('hello ts', 'abc');
