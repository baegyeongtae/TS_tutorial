function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
result.toLocaleString(); // 코드의 추론기능


add(10, '20'); //기본적으로 ts는 문법에 맞지 않는 문구의 오류를 검출해준다.