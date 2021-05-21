# switch문
## 문법
- 하나 이상의 case문으로 구성됩니다. 대개 default문도 있지만, 이는 필수는 아닙니다.
   ```js
    let a = 2 + 2;

    switch (a) {
    case 3:
        alert( '비교하려는 값보다 작습니다.' );
        break;
    case 4:
        alert( '비교하려는 값과 일치합니다.' );     // 4 출력 후 종료
        break;
    case 5:
        alert( '비교하려는 값보다 큽니다.' );
        break;
    default:
        alert( "어떤 값인지 파악이 되지 않습니다." );
    }
 
   ```

- case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.
   ```js
   let a = 2 + 2;

    switch (a) {
    case 3:
        alert( '비교하려는 값보다 작습니다.' );
    case 4:
        alert( '비교하려는 값과 일치합니다.' );     // case 4 출력
    case 5:
        alert( '비교하려는 값보다 큽니다.' );       // case 5 출력
    default:
        alert( "어떤 값인지 파악이 되지 않습니다." );   // default 출력
    }
   ```

- 비교하려는 값과 case문의 자료형이 같아야 실행함.<br><br>

## 여러개의 case 문 묶기
   ```js
    let a = 3;

    switch (a) {
    case 4:
        alert('계산이 맞습니다!');
        break;

    case 3:     // 두 case3, case5 문에서 실행하는 코드가 같을시 묶음
    case 5:
        alert('계산이 틀립니다!');
        alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
        break;

    default:
        alert('계산 결과가 이상하네요.');
    }
   ```