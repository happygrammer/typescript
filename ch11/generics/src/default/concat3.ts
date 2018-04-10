function concat3<T>(strs: T, strs2: T) {
    console.log(typeof strs, strs);
    console.log(typeof strs2, strs2);

    // return strs + strs2; // 캐스팅 없는 T + T 연산은 에러
    return String(strs) + String(strs2); // 캐스팅해 반환 가능

}

concat3("abc", "123"); // 타입 인자를 생략 (타입을 추론해야 함)
concat3<string>("abc", "123"); // 타입 인자 추가 (명시적인 타입이 선언됨)