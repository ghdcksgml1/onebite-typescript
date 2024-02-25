/**
 * 인터페이스
 */
interface Person {
    readonly name: string;
    age: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

const person: Person = {
    name: "홍찬희",
    age: 27,
    sayHi: function () {
        console.log("Hi");
    }
};
