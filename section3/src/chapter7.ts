/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
    name: string;
    age: number;
};

type DefaultMailbox = "b0" | "b1" | "b2" | "b3" | "b4"

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살 입니다.
function func(value: number | Date | Person | DefaultMailbox) {
    // value.toFixed(); // Error!
    // value.toUpperCase(); // Error!
    if (typeof value === "number") { // type guard
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}

func("b0")
