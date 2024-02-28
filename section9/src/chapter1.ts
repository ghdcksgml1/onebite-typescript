/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>; // 한번은 number, 한번은 string 타입으로 전달된다. -> string | number

let d: StringNumberSwitch<boolean | number | string>; // number | string | number -> number | string


/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;
type Origin = number | string | boolean;
type A = Exclude<Origin, string>;
// 1 단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean |

// 결과 -> number | never | boolean -> number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2 단계
// never |
// string |
// never

// 결과 -> never | string | never -> never | string