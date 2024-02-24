// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
    extra?: string;
};

let user: User = {
    id: 1,
    name: "홍찬희",
    nickname: "winterlood",
    birth: "1999.09.25",
    bio: "안녕하세요",
    location: "동탄",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number; // Korea Property를 반드시 가지도록 정의
    // Korea: string; // 위애서 정의한 타입과 호환이 돼야한다.
}
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}
