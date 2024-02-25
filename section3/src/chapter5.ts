/**
 * 타입 추론
 */
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "홍찬희",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"],
};

let {id, name, profile} = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let d; // any type
d = 10;
d.toFixed();

d = "hello"
d.toUpperCase()

const num = 10;
const str = "hello";

let arr: [number, string] = [1, "string"];
