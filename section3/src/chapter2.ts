/**
 * Unknown 타입
 */
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    // downCasting은 오류가 발생한다.
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입 모든 타입의 Serve 타입 (공집합)
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // upCasting 이므로 바인딩 가능하다.
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

/**
 * Void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // any 타입에 한정해서 unknown의 다운캐스팅이 가능하다.
    undefinedVar = anyVar; // any 자체도 다운캐스팅이 가능하다. (치트키 같은 느낌)
    // neverVar = anyVar; // never는 다운캐스팅이 안된다.
}
