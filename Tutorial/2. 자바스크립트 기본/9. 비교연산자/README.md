# 비교 연산자
1. a > b : b보다 a가 크다
2. a < b : a보다 b가 크다
3. a >= b : b보다 a가 크거나 같다
4. a <= b : a보다 b가 크거나 같다
5. a == b : a와 b가 같다
6. a = b : b를 a에 할당
7. a != b : a와 b는 같지 않다.


## 불린형 반환
- true가 반환되면, ‘긍정’, ‘참’, '사실’을 의미합니다.
- false가 반환되면, ‘부정’, ‘거짓’, '사실이 아님’을 의미합니다.
    ```
    alert( 2 > 1 );  // true
    alert( 2 == 1 ); // false
    alert( 2 != 1 ); // true
    ```


## 문자열 비교
- 자바스크립트는 '사전’순(유니코드 순)으로 문자열을 비교합니다.
    ```
    alert( 'Z' > 'A' ); // true
    alert( 'Glow' > 'Glee' ); // true
    alert( 'Bee' > 'Be' ); // true
    ```

문자열 비교시 적용하는 알고리즘<br>
1. 두 문자열의 첫 글자를 비교합니다.
2. 첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 첫 번째 문자열이 두 번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료합니다.
3. 두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교합니다.
4. 글자 간 비교가 끝날 때까지 이 과정을 반복합니다.
5. 비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론 냅니다. 비교가 종료되었지만 두 문자열의 길이가 다르면 길이가 긴 문자열이 더 크다고 결론 냅니다.


## 다른 형을 가진 값 간의 비교
- 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿉니다.
    ```
    alert( '2' > 1 );     // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행
    alert( '01' == 1 );   // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행
    ```


## 일치 연산자
- 동등 연산자(equality operator) ==은 0과 false를 구별하지 못합니다.
    ```
    alert( 0 == false );    // true
    alert( '' == false );   // true
    ```
- 일치 연산자(strict equality operator) ===를 사용하면 형 변환 없이 값을 비교할 수 있습니다
    ```
    alert( 0 === false );   // false, 피연산자의 형이 다르기 때문입니다.
    ```
    ->일치 연산자는 엄격한(strict) 동등 연산자입니다. 자료형의 동등 여부까지 검사하기 때문


## null 이나 undefined와 비교
- 일치 연산자 ===를 사용하여 null과 undefined를 비교
    ```
    alert( null === undefined );    // false
    ```
- 동등 연산자 ==를 사용하여 null과 undefined를 비교
    ```
    alert( null == undefined );     // true
    ```
- 산술 연산자나 기타 비교 연산자 <, >, <=, >=를 사용하여 null과 undefined를 비교<br>
->null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.


## null vs 0
```
    alert( null > 0 );      // (1) false
    alert( null == 0 );     // (2) false
    alert( null >= 0 );     // (3) true
```
->동등 연산자 ==는 피연산자가 undefined나 null일 때 형 변환을 하지 않습니다. undefined와 null을 비교하는 경우에만 true를 반환하고, 그 이외의 경우(null이나 undefined를 다른 값과 비교할 때)는 무조건 false를 반환합니다. 이런 이유 때문에 (2)는 거짓을 반환합니다.

## 비교가 불가능한 undefined
undefined를 다른 값과 비교해서는 안 됩니다.
```
alert( undefined > 0 );     // false (1)
alert( undefined < 0 );     // false (2)
alert( undefined == 0 );    // false (3)
```
