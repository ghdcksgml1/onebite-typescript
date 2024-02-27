/**
 * 인덱스드 액세스 타입
 */
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.id}-${author.name}`)
}

const post: PostList[number] = { // 배열의 요소 타입을 추출해온다.
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "Chuck",
        age: 27,
    },
};
printAuthorInfo(post.author)

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];