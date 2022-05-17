// function sum(a, b) {
//   return a + b;
// }
//
// // sum(10, 20)
// result.toLocaleString();

// @ts-check

/**
 * @param {number} a // 첫번째 숫자
 * @param {number} b // 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}
sum(10, "20"); // ts-check를 import함으로 js 에서 ts의 오류 검출 방식을 알아내볼 수 있다
