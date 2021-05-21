# 화살표 함수 기본
## 화살표함수
- 함수표현식보다 간결한 문법을 가지고 있다.
   ```js
    let func = (arg1, arg2, ...argN) => expression      //화살표 함수


    let func = function(arg1, arg2, ...argN) {          //함수표현식
    return expression;
    };
   ```
- 인수가 하나밖에 없을시 인수를 감싸는 괄호 생략 가능
   ```js
    let double = n => n * 2;
    // let double = function(n) { return n * 2 }과 거의 동일합니다.

    alert( double(3) ); // 6
   ```
- 인수가 하나도 없을땐 괄호 비워두기 가능
   ```js
    let sayHi = () => alert("안녕하세요!");

    sayHi();
   ```


## 본문이 여러 줄인 화살표 함수
- 중괄호 안에 평가해야 할 코드를 넣어주어야 합니다. 그리고 return 지시자를 사용해 명시적으로 결괏값을 반환해 주어야 합니다.
   ```js
    let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용시, return 지시자로 결괏값을 반환해주어야 합니다.
    };

    alert( sum(1, 2) );     // 3
   ```