/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
    name: string; // interface는 무조건 public 필드만 정의할 수 있다.
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    constructor(
        public name: string,
        public moveSpeed: number
    ) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}