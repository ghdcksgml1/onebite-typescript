// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar = 10;
// anyVar = "hello"; // 타입 스크립트는 변수에 값을 넣으면 자동으로 타입을 추론하므로 오류가 발생

let anyVar2: any = 10;
// anyVar2 = true;
// anyVar2 = {};
// anyVar2 = () => {};
// anyVar2.toUpperCase();
// anyVar2.toFixed();
//
// let num: number = 10;
// num = anyVar2; // 모든 타입의 변수에 넣을 수 있음

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

let num: number = 10;
// num = unknownVar; // Error!
// 타입 정제를 해야 넣을 수 있다.
if (typeof unknownVar === "number") {
    num = unknownVar;
}
