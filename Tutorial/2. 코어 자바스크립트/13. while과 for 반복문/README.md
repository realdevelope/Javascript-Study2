# while과 for 반복문
## while 반복문
- 괄호안의 조건이 truthy 이면 반복문의 코드가 실행된다.
- 조건을 만족할 동안 반복(이터레이션)
```js
let i = 0;

while (i < 3) {     // 0, 1, 2가 출력
  alert( i );
  i++;
}
```

## do while 반복문
- 먼저 한번 실행되고, 조건을 확인한 후 조건이 truthy인 동안에 반복 실행된다.
- 즉, 최소한 한번이라도 실행하고 싶을때 사용.
```js
let i = 0;

do {
  alert( i );
  i++;
} 
while (i < 3);
```

## for 반복문
  -구성 요소
  ||||
  |:--:|:--:|:---:|
  | begin | i = 0 | 반복문에 진입할 때 단 한 번 실행됩니다.|
  | condition |	i < 3 |	반복마다 해당 조건이 확인됩니다. false이면 반복문을 멈춥니다.|
  | body | alert(i) |	condition이 truthy일 동안 계속해서 실행됩니다.|
  | step | i++ | 각 반복의 body가 실행된 이후에 실행됩니다.|
  
  <br>
  알고리즘<br>
  begin을 실행함 → (condition이 truthy이면 → body를 실행한 후, step을 실행함)

```js
for (let i = 0; i < 3; i++) {       // 0, 1, 2가 출력됩니다.
  alert(i);
}
```

## 반복문 빠져나오기
- 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있습니다.
```js
let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break;    // (*)

  sum += value;

}
alert( '합계: ' + sum );
```


## 다음 반복문으로 넘어가기
- continue는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있습니다.
```js
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;     // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.

  alert(i);                     // 1, 3, 5, 7, 9가 차례대로 출력됨
}
```


## break / continue 와 레이블
- 여러 개의 중첩 반복문을 한 번에 빠져나와야 하는 경우 사용(유일한방법)
```js
outer: for (let i = 0; i < 3; i++) {

          for (let j = 0; j < 3; j++) {

            let input = prompt(`(${i},${j})의 값`, '');

// 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나감
            if (!input) break outer; // (*)

            // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');
```