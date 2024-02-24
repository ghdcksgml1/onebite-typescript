// object -> 객체라는 정보 외에는 아무런 정보도 없다.
// 객체 리터럴 타입
let user: {
    id?: number; // 없어도 된다. Optional Property
    name: string;
} = {
    id: 1,
    name: "이정환",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown",
};

user.id;
dog.color;

user = {
    name: "홍길동",
};

let config: {
    readonly apiKey: string;
} = {
    apiKey: 'MY API KEY',
};

// config.apiKey = "hacked"; // readOnly 이므로 재할당이 안된다.
