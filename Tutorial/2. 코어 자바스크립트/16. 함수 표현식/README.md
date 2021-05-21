# 함수 표현식
- 자바스크립트는 함수를 특별한 종류의 값으로 취급합니다. 다른 언어에서처럼 "특별한 동작을 하는 구조"로 취급되지 않습니다.
- 함수 선언 방식 외에 함수 표현식(Function Expression) 을 사용해서 함수를 만들 수 있습니다.
   ```js
   let sayHi = function() {
   alert( "Hello" );        //이처럼 변수에 할당할 수 있음
   };
   ```
   ```js
    function sayHi() {
    alert( "Hello" );
    }

    alert( sayHi ); // 함수 코드를 출력 가능
   ```
   -> sayHi옆에 괄호가 없기 때문에 함수는 실행되지 않습니다. 어떤 언어에선 괄호 없이 함수 이름만 언급해도 함수가 실행됩니다. 하지만 자바스크립트는 괄호가 있어야만 함수가 호출됩니다.<br>
   -> 함수표현식 끝에 ; 이 붙는 이유는 코드불록이 아니고 값처럼 취급되어 변수에 할당되므로 구문의 끝이기 때문에 붙음

## 콜백 함수
- 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것
   ```js
    function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }

    function showOk() {
    alert( "동의하셨습니다." );
    }

    function showCancel() {
    alert( "취소 버튼을 누르셨습니다." );
    }

    // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
    ask("동의하십니까?", showOk, showCancel);
   ```
   ->위 예시에선 사용자가 "yes"라고 대답한 경우 showOk가 콜백이 되고, "no"라고 대답한 경우 showCancel가 콜백이 됩니다.


## 함수 선언문과 함수 표현식의 차이
1. 문법
   - 함수 선언문 : 함수가 독립된 구문 형태로 존재하게 됩니다.
     ```
     function sum(a, b) {
        return a + b;
        }
     ```
   - 함수 표현식 : 함수가 표현식의 일부로 존재하게 됩니다.
     ```
     let sum = function(a, b) {
        return a + b;
     };
     ```
2. 자바스크립트 엔진이 언제 함수를 생성하는지
   - 함수 선언문 : 함수 선언문의 정의되기 전에도 호출 할 수 있다.
   ```js
    sayHi("John");      // Hello, John

    function sayHi(name) {
    alert( `Hello, ${name}` );
    }
   ```
   - 함수 표현식 : 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성하기 때문에 실행 흐름이 함수에 도달했을 때 부터 해당 함수를 사용할 수 있음
   ```js
    sayHi("John");      // error!

    let sayHi = function(name) { 
    alert( `Hello, ${name}` );
    };   
   ```

3. 스코프
   - 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.

<br>🚨<br>
함수가 선언되기 이전에도 함수를 활용할 수 있는 함수 선언문 방식을 따르는 게 좋습니다.<br> 
함수 선언 방식은 코드를 유연하게 구성할 수 있도록 해주고, 가독성도 좋습니다.<br>
함수 표현식은 함수 선언문을 사용하는게 부적절할 때에 사용하는 것이 좋습니다