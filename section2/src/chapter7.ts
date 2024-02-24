// void
// void -> 공허 == 아무것도 없다.
// 아무것도 없음을 의미하는 타입
function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

function func3(): undefined {
    console.log("hello");
    return ;
}

function func4(): null {
    console.log("hello");
    return null;
}

// never
// never -> 존재하지 않는
// 불가능한 타입 -> 반환값이 void라고 있는 것 자체가 모순이다
function func5(): never {
    while (true) {}
}

function fun6(): never {
    throw new Error();
}

// let a: never;
// 아무런 값도 담을 수 없다.
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
