# null 병합 연산자 '??'
- 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.
    ```js
    a ?? b      // a 가 null 이나 undefined 가 아니면 a, 그외엔 b 
    ```
    ```js
    let firstName = null;
    let lastName = null;
    let nickName = "Supercoder";

    // null이나 undefined가 아닌 첫 번째 피연산자
    alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
    ```

## ?? 와 || 의 차이
- || 는 첫 번째 truthy 값을 반환합니다.
- ?? 는 첫 번째 정의된(defined) 값을 반환합니다.
    ```js
    height = height ?? 100;     // height에 값이 정의되지 않았다면 100이 할당됨
    ```
    ```js
    let height = 0;

    alert(height || 100);   // 100
    alert(height ?? 100);   // 0
    ```

## 연산자 우선순위
- ??의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 = 보다는 높습니다.
- 제약조건 : 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어있습니다.