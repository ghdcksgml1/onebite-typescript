/**
 * 제네릭
 */
// 제네릭 함수
// <T> -> 타입 변수
function func<T>(value: T): T {
    return value;
}

func(10);
func(true);
func("string");
func<[number, number, number]>([1, 2, 3]); // 타입이 여러가지가 나올 수 있는 변수는 직접 할당해줄 수 있다.
func<number[]>([1, 2, 3]); // 타입이 여러가지가 나올 수 있는 변수는 직접 할당해줄 수 있다.