# 형변환
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다. 이런 과정을 "형 변환(type conversion)"이라고 합니다.

## 문자형으로 반환
**String(value)** 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.
```
let value = 12;
alert(typeof value); // number

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string
```

## 숫자형으로 변환
-숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어납니다.<br>
-**Number(value)** 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.
```
alert( "6" / "2" );  // 3

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.
alert(typeof num); // number
```
-> undefind 입력받았을시 NaN 출력<br>
-> null 입력받았을시 0 출력<br>
-> true and false 입력받았을시 1, 0 출력<br>
-> string 입력받았을시 문자열의 처음과 끝의 공백이 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽고, 변환에 실패하면 NaN을 출력<br>

## 불린형으로 변환
-**boolean(value)** 를 호출하면 명시적으로 불리언으로의 형 변환을 수행할 수 있습니다.<br>
-숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 되고, 그외의 값은 true로 변환됩니다.
```
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
```