# 자료형
자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있습니다. 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있습니다.
- 자바스크립트에는 여덟가지 기본 자료형이 있다.

## 숫자형
숫자형(number type) 은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.
```
let n = 123;
n = 12.345;
```

## Bigint
표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있으며, 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.
```
const bigInt = 1234567890123456789012345678901234567890n;   //끝에 n

```

## 문자형
자바스크립트에선 문자열(string)을 따옴표로 묶습니다.
- 큰따옴표(""), 작은따옴표(''), 역따옴표(``) 
- 큰따옴표와 작은따옴표의 차이를 두지 않는다.(같음)
- 역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있습니다.
- 자바스크립트는 character 형을 지원하지 않고 문자형만 존재!
```
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

## 불린형
불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.
 - 불린형은 긍정(yes)이나 부정(no)을 나타내는 값을 저장할 때 사용합니다. true는 긍정, false는 부정을 의미합니다.

## null 값
자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
```
let age = null;   // 알수없거나 그 값이 비어있다는 뜻
```

## undefinded 값
값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
```
let age;

alert(age); // 'undefined'가 출력됩니다.
```

## 객체와 심볼
객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.<br>
심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다.

## typeof 연산자
연산자는 인수의 자료형을 반환합니다.
 - 연산자: typeof x
 - 함수: typeof(x)
 ```
 typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"
 ```

 