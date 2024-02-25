/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // upCasting

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
// super type
type Animal = {
    name: string;
    color: string;
};

// sub type
type Dog = {
    name: string;
    color: string;
    breed: string; // 견종
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;
// dog = animal; // Error!

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33_000,
    skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; // Error!

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33_000,
    // skill: "reactjs",
};

console.log(book);
// 실행결과: { name: '한 입 크기로 잘라먹는 리액트', price: 33000, skill: 'reactjs' }
