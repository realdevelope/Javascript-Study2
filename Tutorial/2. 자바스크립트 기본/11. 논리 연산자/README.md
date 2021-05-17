# 논리 연산자
 || (OR), && (AND), ! (NOT)

## || (OR)
- 피연산자가 모두 false인 경우를 제외하고 연산 결과는 항상 true입니다.
    ```
    alert( true || true );      // true
    alert( false || true );     // true
    alert( true || false );     // true
    alert( false || false );    // false
    ```

- if문 안에 여러 가지 조건을 넣을 수 있습니다.
    ```
    let hour = 12;
    let isWeekend = true;

    if (hour < 10 || hour > 18 || isWeekend) {
    alert( '영업시간이 아닙니다.' );        // 주말이기 때문임
    }
    ```
- 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
    ```
    let firstName = "";
    let lastName = "";
    let nickName = "바이올렛";

    alert( firstName || lastName || nickName || "익명");        // 바이올렛
    ```
- 단락평가
    ```
    true || alert("not printed");
    false || alert("printed");        //printed
    ```

## && (AND)
- 두 피연산자가 모두가 참일 때 true를 반환
    ```
    alert( true && true );      // true
    alert( false && true );     // false
    alert( true && false );     // false
    alert( false && false );    // false
    ```

- 첫 번째 falsy를 찾는 AND 연산자
    ```
    // 첫 번째 피연산자가 truthy이면,
    // AND는 두 번째 피연산자를 반환합니다.
    alert( 1 && 0 ); // 0
    alert( 1 && 5 ); // 5

    // 첫 번째 피연산자가 falsy이면,
    // AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
    alert( null && 5 ); // null
    alert( 0 && "아무거나 와도 상관없습니다." ); // 0
    ```

## ! (NOT)
- 피연산자를 불린형(true / false)으로 변환하고, 변환된 값의 역을 반환합니다.
    ```
    alert( !true ); // false
    alert( !0 ); // true
    ```
- NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.
    ``` 
    alert( !!"non-empty string" ); // true
    alert( !!null ); // false
    ```

## 논리연산자 우선순위
1.  ! (NOT
2. && (AND)
3. || (OR)

